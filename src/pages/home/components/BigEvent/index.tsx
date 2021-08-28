/*
 * @Author: yuyang
 * @Date: 2021-08-28 10:10:58
 * @LastEditTime: 2021-08-28 16:36:07
 * @LastEditors: yuyang
 */
import React from 'react';
import Broadcast from '@/components/Broadcast';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './overwrite.less';
import BigeventImage from '@/assets/bigevent.jpg';

interface BigEventProps {

}
const BigEvent: React.FC<BigEventProps> = () => {
  React.useEffect(() => {}, []);
  const [pitchDate, setPitchDate] = React.useState<Date>(new Date('2021-04-29'));
  const handleChangeDate = (d: Date) => {
    setPitchDate(d);
  };
  return (
    <div className="w-full mx-auto px-40">
      <div className="w-full p-4">
        <Broadcast>
          2019年10月29日至11月3日，在深圳市教育科学研究院高中教学研究中心带领下，由市教科院9大学科教研员、各区教研中心代表、各市直属高中学校代表组成的学习团队，赴北京参加人民教育出版社组织的系统研修活动。
        </Broadcast>
      </div>
      <div className="w-full flex py-4 items-center justify-center">
        <div className=" shadow-hs">
          <Calendar
            formatDay={(_, date) => date.getDate().toString()}
            onChange={handleChangeDate}
            className="w-full bg-primary"
            defaultValue={pitchDate}
            showFixedNumberOfWeeks
          />
        </div>
        <div className="flex-1 mx-16 p-0 shadow-hs">
          <h3 className="text-3xl text-white bg-primary p-4 m-0">
            <span className="px-4 text-4xl">{pitchDate?.getDate()}</span>
            2021普通高中新课程新教材实施生涯教育研讨活动
          </h3>
          <div className="bg-white px-4">
            <div className="text-center mx-auto" style={{ width: 560, height: 260 }}>
              <img src={BigeventImage} alt="" className="w-full h-full object-cover object-center" />
            </div>
            <p className="text-lg py-4 m-0" style={{ textIndent: '2em' }}>
              为分享普通高中生涯规划课程建设经验，提升学科生涯渗透教育教学水平，推动普通高中育人方式变革，全面提升育人质量，4月29日，深圳市教育科学研究院在龙岗区横岗高级中学举行了深圳市2021年普通高中“新课程新教材实施生涯教育”研讨活动。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigEvent;
