/*
 * @Author: yuyang
 * @Date: 2021-09-14 18:18:32
 * @LastEditTime: 2021-10-18 17:44:50
 * @LastEditors: yuyang
 */
import React from 'react';
import NewsContainer from '@/components/NewsContainer';
import parentBg from '@/assets/bgs/parent_bg.png';
import circle from '@/assets/parent/u9346.svg';
import ParentSchool from './components/ParentSchool';
import TitleLevel1 from '@/components/TitleLevel1';

interface ParentsProps {

}
const Parents: React.FC<ParentsProps> = () => (
  <NewsContainer background={parentBg}>
    <section className="w-full">
      <div className="flex justify-center items-center w-3/4 mx-auto">
        <div className="w-60 h-60 flex justify-center items-center">
          <div className="relative border-8 rounded-full flex items-center justify-center">
            <img src={circle} alt="" className="transform animate-parent-rotate" />
            <span className="text-title font-bold text-3xl absolute top-1/2 transform -translate-y-1/2">家校合作</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl py-4 text-third font-bold text-center border-0 border-b-4 border-solid border-primary">温馨提示</h3>
          <p className="text-third text-left tracking-widest leading-loose text-xl" style={{ textIndent: '2em' }}>
            感谢各位家长对于教科院生涯发展支持平台的关注和支持，为更好的面向广大学生提供社会实践资源，如您所在企业或者其他企业资源具备条件展开家校深入合作，可联系家校业务合作专员，联系方式：XX，合作专员会详细对接并积极落实有效资源的落地，感谢您对于教育社会责任的承担与付出。
          </p>
        </div>
      </div>
    </section>
    <section className="w-full">
      <TitleLevel1 topText="家长" bottomText="家长学堂" />
      <ParentSchool />
    </section>
  </NewsContainer>
);

export default Parents;
