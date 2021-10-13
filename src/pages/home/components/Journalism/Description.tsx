/*
 * @Author: yuyang
 * @Date: 2021-08-29 17:33:40
 * @LastEditTime: 2021-10-13 11:23:43
 * @LastEditors: yuyang
 */
import React, { useContext } from 'react';
import { descriptionContext } from './Journalism';

interface DescriptionProps {
  date: string;
  name: string;
  description: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = (props) => {
  const {
    activeKey,
    onClick,
    renderDefault,
  } = useContext(descriptionContext);
  const { date, children, name, description } = props;
  const isActive = activeKey === name;
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');

  React.useEffect(() => {
    renderDefault(name, children);
  }, []); // 为了初始展示;

  const handleClick = () => {
    onClick?.(name, children);
  };

  return (
    <div className="w-full px-0 box-border my-8 bg-transparent py-0 overflow-hidden shadow-hs transform transition hover:-translate-y-2">
      <div
        className={`w-full rounded flex flex-wrap box-border items-start py-4 bg-transparent cursor-pointer transition ${isActive ? 'bg-primary' : 'bg-custom-white2'}`}
        onMouseEnter={handleClick}
      >
        <div className="w-16 h-16 flex flex-col justify-center items-center bg-third text-white ">
          <p className="text-center text-sm m-0">{day}</p>
          <p className="text-center text-sm m-0">
            {year}
            -
            {month}
          </p>
        </div>
        <div className="w-auto h-16 p-2 " style={{ flex: 4 }}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Description;
