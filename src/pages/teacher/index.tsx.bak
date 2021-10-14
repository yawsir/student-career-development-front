/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-09-23 23:24:14
 * @LastEditors: yuyang
 */
import React, { useState } from 'react';
import NewsContainer from '@/components/NewsContainer';
import MultiPane from '@/components/MultiPane';
import NewsList from '@/components/NewsList';
import teacherBanner from '@/assets/teacher_banner.png';
// import TipModal from './components/TipModal';
import { tabs1, tabs2, tabs3, tabs4, tabs5 } from './news-list';
import styles from './index.less';

const Teacher: React.FC = () => {
  const tabsList = [tabs1, tabs2, tabs3, tabs4, tabs5];
  const bgColors = ['#F5EA8C', '#F5B48C', '#BCF48C', '#8DF4EE', '#FBA4C5'];
  const [currentPane, setCurrentPane] = useState('p0');
  return (
    <NewsContainer>
      <div className="container mx-auto py-2">
        <div className="w-4/5 mx-auto">
          <h3 className="border-0 border-b border-solid border-gray-400 text-center pb-8">
            <span className="inline-block px-16 py-2 text-3xl border-0 border-b-2 border-solid border-primary">名师专栏</span>
          </h3>
          <img src={teacherBanner} alt="" className="w-full h-96 object-cover object-center" />
        </div>
        {/* <TipModal modalTitle={<div className="text-gray-500 text-xl">温馨提示</div>} /> */}
        <div className="w-4/5 mx-auto bg-white py-4 border-2 border-b-0 border-solid border-white">
          <h3 className="border-0 border-b border-solid border-gray-400 text-center pb-8">
            <span className="inline-block px-16 py-2 text-3xl border-0 border-b-2 border-solid border-primary">专业资料库</span>
          </h3>
          <div className="py-8">
            <ul className="p-0 flex justify-between list-none">
              {
                tabsList.map((item, index) => (
                  <li
                    className={`shadow-hs ${styles.switcher} ${currentPane === `p${index}` ? styles['switcher-active'] : ''}`}
                    style={{
                      backgroundColor: bgColors[index],
                    }}
                    onMouseEnter={() => { setCurrentPane(`p${index}`); }}
                    key={item[0].tabKey}
                  >
                    <span>{item[0].tabTitle}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="mx-auto" style={{ minHeight: 600 }}>
            <MultiPane current={currentPane}>
              {
                tabsList.map((item, index) => (
                  <MultiPane.Item
                    name={`p${index}`}
                    visibleClassName={styles.listshow}
                    invisibleClassName={styles.listhidden}
                    key={item[0].tabKey}
                  >
                    <NewsList
                      listStyle="square"
                      tabs={item}
                      barCentered
                      textCentered
                      tabBarGutter={64}
                    />
                  </MultiPane.Item>
                ))
              }
            </MultiPane>
          </div>
        </div>
      </div>
    </NewsContainer>
  );
};
export default Teacher;
