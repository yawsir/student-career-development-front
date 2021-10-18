/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-10-18 10:39:57
 * @LastEditors: haoyh
 */
import React from 'react';
import NewsContainer from '@/components/NewsContainer';
import background from '@/assets/teacher/background.png';
import TeacherCard from './components/TeacherCard';
import TeacherPicture from './components/TeacherPicture';
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
        <div className={`${styles['teacher-title']} flex justify-center my-5 rounded-md bg-gradient-to-r from-bg-1 to-bg-2`}>
          <div className="flex flex-col " style={{ flex: '0 1 46%' }}>
            <div className="text-lg">
              教师社区
            </div>
            <div className="text-3xl">
              专业资料库
            </div>
          </div>
        </div>
        <TeacherPicture />
      </div>
    </div>
  </NewsContainer>
);
export default Teacher;
