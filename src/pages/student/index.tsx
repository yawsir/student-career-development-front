/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-10-15 11:35:49
 * @LastEditors: yuyang
 */
import React from 'react';
import NewsContainer from '@/components/NewsContainer';
import NewsList from '@/components/NewsList';
import MultiPane from '@/components/MultiPane';
import studengBg from '@/assets/bgs/student_bg.png';
import shijian from '@/assets/icons/shijian.png';
import gaokao from '@/assets/icons/gaokao.png';
import zhongkao from '@/assets/icons/zhongkao.png';
import SliderStudents from './components/SliderStudents';
import SliderNews from './components/SliderNews';
import SliderCelebrity from './components/SliderCelebrity';
import { tabs3, tabs4 } from './news-list';

type Panes = 'p1' | 'p2' | 'p3';
const labels: {
  id: Panes;
  name: string;
  icon: any;
}[] = [
  {
    id: 'p1',
    name: '实践活动',
    icon: shijian,
  },
  {
    id: 'p2',
    name: '高考资讯',
    icon: gaokao,
  },
  {
    id: 'p3',
    name: '中考资讯',
    icon: zhongkao,
  },
];
const Index: React.FC = () => {
  const [currentPane, setCurrentPane] = React.useState<Panes>('p1');
  const handleMouseEnter = (pane: Panes) => {
    setCurrentPane(pane);
  };
  return (
    <NewsContainer background={studengBg}>
      <section className="w-11/12 mx-auto px-24 2xl:px-32 my-16 box-border relative">
        <SliderStudents />
      </section>
      <section className="w-full px-16 2xl:px-32 box-border">
        <div className="flex flex-wrap items-start justify-center">
          <div className="w-1/6 box-border mt-2 mx-auto mb-0 flex flex-wrap flex-shrink-0">
            <ul className="list-none text-base font-bold m-0 pt-16">
              {
                labels.map((item) => (
                  <li className={`py-2 px-4 my-4 cursor-pointer ${currentPane === item.id ? 'text-primary-theme' : 'text-primary'}`} key={item.id} onMouseEnter={() => handleMouseEnter(item.id)}>
                    <img src={item.icon} alt="" />
                    <span className="ml-4">{item.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="w-5/6 box-border" style={{ minHeight: 480 }}>
            <MultiPane current={currentPane}>
              <MultiPane.Item name="p1">
                <div style={{ minHeight: 480 }} className={`animate__animated ${currentPane === 'p1' ? 'animate__fadeIn' : 'animate__fadeOut'}`}>
                  <SliderNews />
                </div>
              </MultiPane.Item>
              <MultiPane.Item name="p2">
                <div style={{ minHeight: 480 }} className={`animate__animated ${currentPane === 'p2' ? 'animate__fadeIn' : 'animate__fadeOut'}`}>
                  <NewsList tabs={tabs3} listStyle="square" showDate />
                </div>
              </MultiPane.Item>
              <MultiPane.Item name="p3">
                <div className={`h-full animate__animated ${currentPane === 'p3' ? 'animate__fadeIn' : 'animate__fadeOut'}`}>
                  <NewsList tabs={tabs4} verticalCentered listStyle="square" style={{ minHeight: 480 }} showDate />
                </div>
              </MultiPane.Item>
            </MultiPane>
          </div>
        </div>
      </section>
      <section className="w-full mx-auto px-24 2xl:px-32 box-border">
        <SliderCelebrity />
      </section>
    </NewsContainer>
  );
};

export default Index;
