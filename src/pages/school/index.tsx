/*
 * @Author: yuyang
 * @Date: 2021-08-31 17:24:02
 * @LastEditTime: 2021-10-19 09:53:24
 * @LastEditors: yuyang
 */
import React from 'react';
import NewsContainer from '@/components/NewsContainer';
import schoolBanner from '@/assets/school/banner.png';
import TitleLevel2 from '@/components/TitleLevel2';
import TitleLevel1 from '@/components/TitleLevel1';
import Tables from './components/Tables';
import SliderActivity from './components/SliderActivity';
import SchoolPictures from './components/SchoolPictures';

interface SchoolProps {

}

const School: React.FC<SchoolProps> = () => (
  <NewsContainer>
    <section className="w-full mx-auto" style={{ height: 450 }}>
      <img src={schoolBanner} alt="" className="w-full h-full object-cover object-center" />
    </section>
    <section className="w-full mx-auto my-8">
      <TitleLevel2 title="近期活动" />
      <SliderActivity />
    </section>
    <section className="w-full mx-auto p-4">
      <TitleLevel2 title="政策文件解读" />
      <Tables />
    </section>
    <section className="w-full m-auto my-8">
      <TitleLevel1 bottomText="学校总体生涯教育设计案例" topText="学校" />
    </section>
    <section className="w-full m-auto my-8">
      <SchoolPictures />
    </section>
  </NewsContainer>
);

export default School;
