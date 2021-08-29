/*
 * @Author: yuyang
 * @Date: 2021-08-29 17:33:40
 * @LastEditTime: 2021-08-29 18:11:51
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
    <div className="w-full lg:w-1/3 my-2 lg:my-0 bg-transparent py-0 overflow-hidden">
      <div
        className={`w-full rounded flex flex-wrap box-border items-center py-0 bg-transparent cursor-pointer transition delay-75 ${isActive ? 'bg-primary' : 'bg-white'}`}
        onClick={handleClick}
      >
        <div className="w-full lg:w-auto bg-custom-gray-2 flex-shrink-0 p-2">
          <p className="text-center text-2xl font-bold m-0">{day}</p>
          <p className="text-center text-xl font-bold m-0">
            {year}
            -
            {month}
          </p>
        </div>
        <div className={`w-full lg:w-auto h-56 p-2 ${isActive ? 'text-white' : ''} `} style={{ flex: 4 }}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Description;
