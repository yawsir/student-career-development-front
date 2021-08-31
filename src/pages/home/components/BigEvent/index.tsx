/*
 * @Author: yuyang
 * @Date: 2021-08-28 10:10:58
 * @LastEditTime: 2021-08-31 18:25:17
 * @LastEditors: yuyang
 */
import React from 'react';
import Broadcast from '@/components/Broadcast';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isEqualDate } from '@/utils/utils';
import './overwrite.less';
import bigEventInfos, { BigEventInfoType } from './big-event-info';

interface BigEventProps {

}
const BigEvent: React.FC<BigEventProps> = () => {
  React.useEffect(() => {}, []);
  const [eventInfo, setEventInfo] = React.useState<Partial<BigEventInfoType>>({});
  const handleChangeDate = (d: Date) => {
    for (let i = 0; i < bigEventInfos.length; i++) {
      if (isEqualDate(d, bigEventInfos[i].date)) {
        setEventInfo(bigEventInfos[i]);
        return;
      }
    }
    setEventInfo({});
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
          <Calendar
            formatDay={(_, date) => date.getDate().toString()}
            onChange={handleChangeDate}
            className="w-full bg-transparent shadow-hs text-center mx-auto"
            defaultActiveStartDate={new Date(bigEventInfos[0].date)}
            showFixedNumberOfWeeks
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
              <img src={eventInfo.image} alt="" className="w-full h-full object-cover object-center" />
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
