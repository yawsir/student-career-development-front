/*
 * @Author: yuyang
 * @Date: 2021-08-29 11:50:26
 * @LastEditTime: 2021-10-19 13:09:15
 * @LastEditors: yuyang
 */
import React from 'react';
import { Form, Select } from 'antd';
import bannerImg from '@/assets/career_banner.jpg';
import careerbg from '@/assets/bgs/about.png';
import TitleLevel1 from '@/components/TitleLevel1';
import NewsContainer from '@/components/NewsContainer';
import CareerItem from './components/CareerItem';
import careerInfoList, { hollandCodes, CareenInfoType, HollandCodeType } from '@/data/career-info';

interface CareerProps {

}

const Career: React.FC<CareerProps> = () => {
  const [form] = Form.useForm();
  const [filtedList, setFiltedList] = React.useState<CareenInfoType[]>(careerInfoList);

  const handleSelectChange = (value: HollandCodeType) => {
    if (value) {
      setFiltedList(careerInfoList.filter((item) => item.hollandCode.includes(value)));
    } else {
      setFiltedList(careerInfoList);
    }
  };
  return (
    <div>
      <section className="w-full">
        <div className="w-full">
          <img src={bannerImg} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <TitleLevel1 topText="主页·职业信息库" bottomText="职业信息库" />
      </section>
      <NewsContainer background={careerbg}>
        <div className="sm:w-full md:w-full lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-row-reverse px-16 pt-8">
          <Form form={form}>
            <Form.Item
              name="hollandCode"
            >
              <Select
                placeholder="选择霍兰德代码"
                showSearch
                style={{ width: 256 }}
                onChange={handleSelectChange}
                allowClear
              >
                {
                  hollandCodes.map((item) => (
                    <Select.Option key={item} value={item}>{item}</Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Form>
        </div>
        <div className="sm:w-full md:w-full lg:w-5/6 xl:w-4/5 2xl:w-3/4 mx-auto border-4 border-primary border-solid">
          <h3 className="text-3xl text-center pt-8 text-primary">职业信息</h3>
          <div className="flex justify-center flex-wrap">
            {
              filtedList.map((item) => <CareerItem key={item.id} {...item} />)
            }
          </div>
        </div>
      </NewsContainer>
    </div>
  );
};

export default Career;
