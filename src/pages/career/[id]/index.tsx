/*
 * @Author: yuyang
 * @Date: 2021-08-29 11:59:52
 * @LastEditTime: 2021-10-19 13:09:31
 * @LastEditors: yuyang
 */
import React from 'react';
import { history } from 'umi';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import MultiPane from '@/components/MultiPane';
import NewsContainer from '@/components/NewsContainer';
import careerInfo from '@/data/career-info';

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
  const handleGoBack = () => {
    history.goBack();
  };
  const career = careerInfo[id - 1];
  const defaultVisible = career.jobs?.[0].id || '';
  const [visibleJob, setVissibleJob] = React.useState<string>(defaultVisible);
  return (
    <NewsContainer>
      <div className="container mx-auto">
        <div className="flex flex-row-reverse px-8">
          <Button
            type="primary"
            icon={<LeftOutlined />}
            className="rounded"
            size="large"
            style={{ backgroundColor: '#5C739B', borderRadius: '0.75rem' }}
            onClick={handleGoBack}
          >
            返回
          </Button>
        </div>
        <div className="w-4/5 mx-auto border-8 border-primary border-solid p-12 bg-white">
          <h3 className="text-center text-primary text-4xl mb-14">
            <span className="pb-2 px-28 border-0 border-b-2 border-primary border-solid">{career.name}</span>
          </h3>
          <div className="flex justify-start items-start">
            <div className="px-8">
              <ul className="list-none">
                {
                  career?.jobs?.map((item) => (
                    <li
                      className={`text-left cursor-pointer text-white text-xl mb-10 w-96 px-6 py-6 ${visibleJob === item.id ? 'bg-active' : 'bg-secondary'}`}
                      onClick={() => setVissibleJob(item.id)}
                    >
                      {item.jobName}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="px-8">
              <MultiPane current={visibleJob}>
                {
                  career?.jobs?.map((item) => (
                    <MultiPane.Item name={item.id}>
                      <div className="animate-appear">
                        <h4 className="text-primary text-2xl text-center font-bold">
                          {item.jobName}
                          (
                          {item.hollandCode}
                          )
                        </h4>
                        <p className="text-primary text-2xl text-left">职责要求</p>
                        <ul>
                          {
                            item.jobDesc.map((desc) => <li>{desc}</li>)
                          }
                        </ul>
                      </div>
                    </MultiPane.Item>
                  ))
                }
              </MultiPane>
            </div>
          </div>
          <div className="flex justify-center p-2">
            <Button
              type="primary"
              className="rounded"
              size="large"
              style={{ backgroundColor: '#5C739B', borderRadius: '0.75rem', fontSize: 18 }}
              onClick={handleGoBack}
            >
              返回列表
            </Button>
          </div>
        </div>
      </div>
    </NewsContainer>
  );
};

export default CareerDetail;
