/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-10-15 11:25:31
 * @LastEditors: haoyh
 */
import React from 'react';
import NewsContainer from '@/components/NewsContainer';
import background from '@/assets/teacher/background.png';
// import TipModal from './components/TipModal';
import TeacherCard from './components/TeacherCard';
import styles from './index.less';

const Teacher: React.FC = () => (
  <NewsContainer background={background}>
    <div className={`${styles.teacherPage} container mx-auto py-2`}>
      <div className="w-full mx-auto">
        <div className="flex justify-center items-center text-center my-4">
          <span className="text-xl text-title my-5 rounded-md font-bold transition transform scale-100 hover:scale-110 bg-gradient-to-r from-bg-1 to-bg-2" style={{ padding: '16px 50px' }}>
            名师专栏
          </span>
        </div>
        <div className={`${styles['teacher-content']} mx-auto flex flex-wrap justify-between`}>
          <TeacherCard />
        </div>
      </div>
      <div className="w-full">
        <div className="my-5 rounded-md font-bold  bg-gradient-to-r from-bg-1 to-bg-2">
          <span>
            专业资料库
          </span>
        </div>
      </div>
    </div>

    {/* <TipModal modalTitle={<div className="text-gray-500 text-xl">温馨提示</div>} /> */}
    {/* <div className="w-4/5 mx-auto bg-white py-4 border-2 border-b-0 border-solid border-white">
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
        </div> */}
    {/* </div> */}
  </NewsContainer>
);
export default Teacher;
