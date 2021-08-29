/*
 * @Author: yuyang
 * @Date: 2021-08-29 15:07:47
 * @LastEditTime: 2021-08-29 15:26:10
 * @LastEditors: yuyang
 */
import React from 'react';
import { history } from 'umi';
import { CareenInfoType } from '../career-info';

interface CareerItemProps extends Partial<CareenInfoType> {

}
const CareerItem: React.FC<CareerItemProps> = (props) => {
  const { icon, name, id } = props;
  const handleClick = () => {
    history.push(`/career/${id}`);
  };
  return (
    <div className="flex-1 box-border">
      <div className="mx-auto w-48 h-48 ">
        <div className="w-24 h-24 cursor-pointer mx-auto" onClick={handleClick}>
          <img src={icon} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <p className="text-center pt-2 font-bold">{name}</p>
      </div>
    </div>
  );
};

export default CareerItem;
