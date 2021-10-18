/*
 * @Author: haoyh
 * @Date: 2021-10-18 10:36:00
 * @LastEditTime: 2021-10-18 17:54:43
 * @LastEditors: haoyh
 */
import React from 'react';
import pic1 from '@/assets/teacher/pic1.png';
import pic2 from '@/assets/teacher/pic2.png';
import pic3 from '@/assets/teacher/pic3.png';
import pic4 from '@/assets/teacher/pic4.png';
import pic5 from '@/assets/teacher/pic5.png';
import styles from './index.less';
import Slide from '@/components/Slide';

const TeacherPicture: React.FC = () => (
  <>
    <div className={styles.teacherPicture}>
      <div className="flex">
        <Slide imgUrl={pic1} text="学科渗透生涯支持(学科融合)" bottom="-100%" />
        <Slide imgUrl={pic2} text="生涯活动案例库" bottom="-100%" />
        <Slide imgUrl={pic3} text="生涯教育基础知识" bottom="-100%" />
      </div>
      <div className="flex h-64">
        <div style={{ width: '40%', height: '100%' }}>
          <Slide imgUrl={pic4} text="生涯辅导(咨询类)专栏" bottom="-100%" />
        </div>
        <div style={{ width: '56%', height: '100%' }}>
          <Slide imgUrl={pic5} text="主题课程设计类专栏" bottom="-100%" />
        </div>
      </div>
    </div>
  </>
);

export default TeacherPicture;
