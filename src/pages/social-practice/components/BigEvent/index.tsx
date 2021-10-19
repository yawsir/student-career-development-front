/* eslint-disable react/no-danger */
/*
 * @Author: yuyang
 * @Date: 2021-08-28 10:10:58
 * @LastEditTime: 2021-10-19 17:18:27
 * @LastEditors: yuyang
 */
import React from 'react';
import DayPicker, { DayPickerProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { isEqualDate } from '@/utils/utils';
import './overwrite.less';
import bigEventInfos, { BigEventInfoType } from '@/data/social-big-event';

interface BigEventProps {

}
interface EventTree {
  [month: string]: BigEventInfoType[]
}
const MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const WEEKDAYS_SHORT = ['日', '一', '二', '三', '四', '五', '六'];

const BigEvent: React.FC<BigEventProps> = () => {
  const [eventInfo, setEventInfo] = React.useState<Partial<BigEventInfoType>>(bigEventInfos[0]);
  const [eventTree, setEventTree] = React.useState<EventTree>({});
  const [currentMonth, setCurrentMonth] = React.useState<number>(1);
  React.useEffect(() => {
    const t: EventTree = {};
    bigEventInfos.forEach((item, idx) => {
      const month = new Date(item.date).getMonth() + 1;
      if (t[month]) {
        t[month] = [...t[month], item];
      } else {
        t[month] = [item];
      }
      if (idx === 0) {
        setCurrentMonth(month);
      }
    });
    setEventTree(t);
  }, []);

  const modifiers: DayPickerProps['modifiers'] = {
    eventDate: bigEventInfos.map((item) => new Date(item.date)),
  };

  const handleChangeDate = (d: Date) => {
    for (let i = 0; i < bigEventInfos.length; i++) {
      if (isEqualDate(d, bigEventInfos[i].date)) {
        setEventInfo(bigEventInfos[i]);
        return;
      }
    }
  };

  const handleChangeMonth = (m: Date) => {
    setCurrentMonth(m.getMonth() + 1);
  };
  return (
    <div className="w-full mx-auto px-0 lg:px-16">
      <div className="w-full flex flex-wrap py-4 items-start justify-center">
        <div className="w-full xl:w-auto bg-transparent my-4" style={{ minWidth: 128 }}>
          <DayPicker
            onDayClick={handleChangeDate}
            onDayMouseEnter={handleChangeDate}
            onMonthChange={handleChangeMonth}
            modifiers={modifiers}
            months={MONTHS}
            weekdaysShort={WEEKDAYS_SHORT}
            initialMonth={new Date(bigEventInfos[0].date)}
            className="w-full bg-transparent shadow-hs text-center mx-auto"
          />
        </div>
        <div className="w-full xl:w-auto flex-1 mx-0 lg:mx-16 py-8 shadow-hs h-96 bg-custom-white4">
          {
            eventTree[currentMonth]?.map((item) => (
              <h3 className="flex justify-start items-center px-4 m-0 mb-4 cursor-pointer" onMouseEnter={() => setEventInfo(item)} key={item.id}>
                <span className="mr-4 w-16 h-16 flex flex-col justify-center items-center text-center bg-primary text-white ">
                  {item.enterpriseName}
                </span>
                <p className="text-title flex-1 flex flex-col m-0">
                  <span>{item.title}</span>
                  <span className="text-xs text-secondary pb-1">{item.date}</span>
                  <span className={`h-0.5 bg-primary transition-all duration-700 ${eventInfo.id === item.id ? 'w-full' : 'w-0'}`} />
                </p>
              </h3>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BigEvent;
