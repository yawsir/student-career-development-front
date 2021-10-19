/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-08-29 15:07:47
 * @LastEditTime: 2021-10-19 11:39:22
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
      <div className="mx-auto w-48 h-48">
        <div className="w-40 h-40 cursor-pointer mx-auto flex flex-col justify-center items-center transform border-4 border-transparent border-solid transition hover:-translate-y-2 hover:shadow-hs hover:border-primary">
          <div className="w-24 h-24" onClick={handleClick}>
            <img src={icon} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <p className="text-center py-2 m-0 text-base font-bold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CareerItem;
