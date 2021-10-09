/*
 * @Author: yuyang
 * @Date: 2021-08-28 10:10:58
 * @LastEditTime: 2021-10-09 19:16:38
 * @LastEditors: yuyang
 */
import React from 'react';
import DayPicker, { DayPickerProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { isEqualDate } from '@/utils/utils';
import './overwrite.less';
import bigEventInfos, { BigEventInfoType } from './big-event-info';

interface BigEventProps {

}
const MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const WEEKDAYS_SHORT = ['日', '一', '二', '三', '四', '五', '六'];

const BigEvent: React.FC<BigEventProps> = () => {
  const [eventInfo, setEventInfo] = React.useState<Partial<BigEventInfoType>>(bigEventInfos[0]);
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
  return (
    <div className="w-full mx-auto px-0 lg:px-16">
      <div className="w-full flex flex-wrap py-4 items-center justify-center">
        <div className="w-full xl:w-auto bg-transparent my-4" style={{ minWidth: 128 }}>
          <DayPicker
            onDayClick={handleChangeDate}
            modifiers={modifiers}
            fixedWeeks
            months={MONTHS}
            weekdaysShort={WEEKDAYS_SHORT}
            initialMonth={new Date(bigEventInfos[0].date)}
            className="w-full bg-transparent shadow-hs text-center mx-auto"
          />
        </div>
        <div className="w-full xl:w-auto flex-1 mx-0 lg:mx-16 px-4 py-8 shadow-hs">
          <h3 className="flex justify-center items-center text-center p-4 m-0">
            {
              eventInfo.date && (
                <span className="mr-4 w-16 h-16 flex flex-col justify-center items-center bg-primary text-white ">
                  <p className="text-center text-sm m-0">{new Date(eventInfo.date).getDate()}</p>
                  <p className="text-center text-sm m-0">
                    {new Date(eventInfo.date).getFullYear()}
                    -
                    {new Date(eventInfo.date).getMonth() + 1}
                  </p>
                </span>
              )
            }
            <span>{eventInfo.title}</span>
          </h3>
          <div className="bg-white flex justify-between items-center">
            <div className="text-center mr-4 w-80 h-56 flex-shrink-0 rounded-lg overflow-hidden transform origin-top-left scale-90 hover:scale-100 transition-all duration-300" style={{ height: 260 }}>
              {
                eventInfo.image && <img src={eventInfo.image} alt="" className="w-full h-full object-cover object-center" />
              }
            </div>
            <p className="text-base font-sans leading-relaxed py-4 m-0" style={{ textIndent: '2em' }}>
              {eventInfo.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigEvent;
