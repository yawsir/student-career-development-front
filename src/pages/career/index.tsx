/*
 * @Author: yuyang
 * @Date: 2021-08-29 11:50:26
 * @LastEditTime: 2021-08-29 16:45:43
 * @LastEditors: yuyang
 */
import React from 'react';
import bannerImg from '@/assets/career_banner.jpg';
import { Form, Select } from 'antd';
import CareerItem from './components/CareerItem';
import careerInfoList, { hollandCodes, CareenInfoType, HollandCodeType } from './career-info';

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
    <div className="w-ful">
      <section className="w-full">
        <div className="w-full">
          <img src={bannerImg} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <h4 className="w-full box-border m-0 bg-primary text-white text-3xl text-left pt-4 pb-2 pl-10">
          职业信息库
        </h4>
      </section>
      <section className="w-full bg-custom-gray-5">
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
      </section>
    </div>
  );
};

export default Career;
