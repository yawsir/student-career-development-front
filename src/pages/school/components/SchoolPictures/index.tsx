/* eslint-disable react/no-unescaped-entities */
/*
 * @Author: yuyang
 * @Date: 2021-10-19 09:49:01
 * @LastEditTime: 2021-10-19 10:26:47
 * @LastEditors: yuyang
 */
import React from 'react';
import Slide from '@/components/Slide';
import pic1 from '@/assets/school/pic1.png';
import pic2 from '@/assets/school/pic2.png';
import pic3 from '@/assets/school/pic3.png';
import pic4 from '@/assets/school/pic4.png';
import pic5 from '@/assets/school/pic5.png';

interface SchoolPicturesProps {

}
const SchoolPictures: React.FC<SchoolPicturesProps> = () => (
  <div className="mb-12">
    <div className="flex flex-wrap items-center justify-center">
      <Slide imgUrl={pic1} maskDirection="top-bottom">
        <div className="text-3xl text-center font-bold">
          <p className="m-0">红岭中学</p>
          <p className="m-0">“大平台”促“大生涯”教育"</p>
        </div>
      </Slide>
      <Slide imgUrl={pic2} maskDirection="top-bottom">
        <div className="text-3xl text-center font-bold">
          <p className="m-0">预见自我，遇见未来</p>
          <p className="m-0">——深圳市厚德书院生涯教育实施方案</p>
        </div>
      </Slide>
      <Slide imgUrl={pic3} maskDirection="top-bottom">
        <div className="text-3xl text-center font-bold">
          <p className="m-0">新安中学</p>
          <p className="m-0">扬生涯教育之帆，展学生梦想之翼</p>
        </div>
      </Slide>
      <Slide imgUrl={pic4} maskDirection="top-bottom">
        <div className="text-3xl text-center font-bold">
          <p className="m-0">光明区高级中学</p>
          <p className="m-0">生涯让选择更有力量</p>
        </div>
      </Slide>
      <Slide imgUrl={pic5} maskDirection="top-bottom">
        <div className="text-3xl text-center font-bold">
          <p className="m-0">福田外国语高级中学</p>
          <p className="m-0">生涯教育总体设计</p>
        </div>
      </Slide>
    </div>
  </div>
);

export default SchoolPictures;
