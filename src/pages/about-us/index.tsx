/*
 * @Author: yuyang
 * @Date: 2021-05-04 19:36:25
 * @LastEditTime: 2021-09-14 18:22:21
 * @LastEditors: yuyang
 */
import React from 'react';
import banner from '@/assets/platform_banner.jpg';
import bgImg from '@/assets/bgs/about.jpg';
import platformIntroImg from '@/assets/platform_intro.png';
import { Row, Col } from 'antd';

const AboutUs: React.FC = () => (
  <div className="w-full bg-center bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
    <Row justify="center" align="top">
      <Col xxl={20} xl={20} lg={20} md={24} className="relative">
        <img src={banner} alt="" className="w-full h-96 object-cover object-center" />
        <h3 className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-r-lg text-white text-4xl bg-primary py-4 pr-16 pl-2">平台介绍</h3>
      </Col>
    </Row>
    <div className="w-full box-border px-0 lg:px-12 py-4">
      <h2 className="text-3xl w-full border-0 border-b-2  border-gray-500 border-solid px-8 pb-4">平台简介</h2>
      <div className="w-full lg:w-4/5 mx-auto bg-white border-2 border-gray-500 border-solid p-8">
        <h3 className="text-3xl text-center">深圳学生生涯发展支持平台借鉴先进经验，对生涯教育各类信息进行分类、整合、优化</h3>
        <div className="flex flex-wrap items-start justify-center">
          <div className="w-full xl:w-1/2 py-2 px-0 xl:px-4">
            <img src={platformIntroImg} alt="" className="w-full h-full object-center object-cover" />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col justify-start items-center">
            <div className="relative bg-custom-gray-4 p-2 pl-4 text-xl shadow-hs">
              <p>
                深圳学生生涯发展支持平台将以网站和微信公众号形式同步呈现,网站的主要用户包括学生、教师、家长、内容运营人员以及网站管理人员。网站管理人员可以网站进行初始化操作、用户人员管理、日常维护操作等。内容运营人员负责平台内容的创建与维护。学生、教师、家长作为终端用户可以在网站访问相应的内容,在公众号访问有限的内容。内容运营人员和网站管理员只可通过网站进行维护管理。
              </p>
              <span className="absolute block -left-3 w-6 h-32 bg-primary top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="pt-4 text-xl">
              <p>
                深圳学生生涯发展支持平台的用户和数据与深圳教育云互联互通。能够适配深圳教育云的统一用户体系;能够将数据按规范接入深圳教育云。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
