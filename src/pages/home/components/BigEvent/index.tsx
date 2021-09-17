/*
 * @Author: yuyang
 * @Date: 2021-08-28 10:10:58
 * @LastEditTime: 2021-09-17 10:02:07
 * @LastEditors: yuyang
 */
import React from 'react';
import DayPicker, { DayPickerProps } from 'react-day-picker';
import Broadcast from '@/components/Broadcast';
import 'react-day-picker/lib/style.css';
import { isEqualDate } from '@/utils/utils';
import './overwrite.less';
import bigEventInfos, { BigEventInfoType } from './big-event-info';

interface BigEventProps {

}
const modifiersStyles = {
  eventDate: {
    color: '#ffc107',
    backgroundColor: '#fffdee',
  },
};
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
    <div className="w-full mx-auto px-0 lg:px-40">
      <div className="w-full p-4">
        <Broadcast>
          2019年10月29日至11月3日，在深圳市教育科学研究院高中教学研究中心带领下，由市教科院9大学科教研员、各区教研中心代表、各市直属高中学校代表组成的学习团队，赴北京参加人民教育出版社组织的系统研修活动。
        </Broadcast>
      </div>
      <div className="w-full flex flex-wrap py-4 items-center justify-center">
        <div className="w-full xl:w-auto bg-transparent my-4" style={{ minWidth: 128 }}>
          <DayPicker
            onDayClick={handleChangeDate}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            fixedWeeks
            months={MONTHS}
            weekdaysShort={WEEKDAYS_SHORT}
            initialMonth={new Date(bigEventInfos[0].date)}
            className="w-full bg-transparent shadow-hs text-center mx-auto"
          />
        </div>
        <div className="w-full xl:w-auto flex-1 mx-0 lg:mx-16 p-0 shadow-hs">
          <h3 className="text-3xl text-white bg-primary p-4 m-0">
            {
              eventInfo.date && (
                <span className="px-4 text-4xl">{new Date(eventInfo.date).getDate()}</span>
              )
            }
            {eventInfo.title}
          </h3>
          <div className="bg-white px-4">
            <div className="text-center mx-auto w-full" style={{ height: 260 }}>
              {
                eventInfo.image && <img src={eventInfo.image} alt="" className="w-full h-full object-cover object-center" />
              }
            </div>
            <p className="text-lg py-4 m-0" style={{ textIndent: '2em' }}>
              {eventInfo.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigEvent;
