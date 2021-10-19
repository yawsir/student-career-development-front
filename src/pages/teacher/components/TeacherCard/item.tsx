/*
 * @Author: haoyh
 * @Date: 2021-10-14 15:44:40
 * @LastEditTime: 2021-10-19 13:38:06
 * @LastEditors: haoyh
 */

import React from 'react';

import styles from './index.less';

interface TeacherItemProps {
  item:{
    id:string,
    name:string,
    des:string,
    img:string,
  }
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  const { item } = props;
  return (
    <>
      <div
        className={styles.tCard}
      >
        <div className="flex">
          <div>
            <img src={item.img} alt="teacher" className="w-32 h-full" />
          </div>
          <div className="flex flex-col">
            <div className={`${styles.tName} flex justify-center items-center h-10 bg-teacherBg`}>{item.name}</div>
            <div className="py-2.5 px-2.5 text-primary">{item.des}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherItem;
