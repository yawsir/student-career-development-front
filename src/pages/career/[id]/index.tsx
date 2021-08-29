/*
 * @Author: yuyang
 * @Date: 2021-08-29 11:59:52
 * @LastEditTime: 2021-08-29 13:23:06
 * @LastEditors: yuyang
 */
import React from 'react';

interface CareerDetailProps {
  match: {
    params: {
      id: number;
    };
  };
}
const CareerDetail: React.FC<CareerDetailProps> = (props) => {
  const { match } = props;
  const { params: { id } } = match;
  return (
    <div>
      {id}
      职业详情
    </div>
  );
};

export default CareerDetail;
