/*
 * @Author: haoyh
 * @Date: 2021-10-14 15:44:40
 * @LastEditTime: 2021-10-14 16:02:26
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
  const [hover, setHover] = React.useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div
        className={`${styles.tCard} transition transform ${hover ? '-translate-y-2' : '-translate-y-0'} ${hover ? 'scale-105' : 'scale-100'} `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex">
          <div>
            <img src={item.img} alt="teacher" className="w-32" />
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
