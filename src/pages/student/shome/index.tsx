/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:04:29
 * @LastEditTime: 2021-07-07 15:46:07
 * @LastEditors: yuyang
 */
import React from 'react';
import { useModel, useHistory } from 'umi';
import BannerImg from '@/assets/yay.jpg';
import hollandImg from '@/assets/holland.jpg';
import valuesImg from '@/assets/values.jpg';
import Header from '../components/Header';

interface TestItemProps {
  img: string;
  title?: string;
  onClick?: () => void;
}

const TestItem: React.FC<TestItemProps> = (props) => {
  const { img, onClick, title } = props;
  const handleClick = () => {
    onClick?.();
  };
  return (
    <div className="w-full 2xl:w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full p-2">
      <div className="border border-solid border-gray-400">
        <div className="w-full h-72">
          <img src={img} alt="" className="w-full h-full" />
        </div>
        <div>
          <h5 className="text-base font-bold">{title}</h5>
          <div className="flex justify-between text-sm text-gray-400">
            <p>1316人已测</p>
            <p>预计时间：15min</p>
          </div>
        </div>
        <div
          className="bg-gray-300 w-full h-8 leading-8 text-center cursor-pointer hover:bg-gray-200 transition-all"
          role="button"
          tabIndex={0}
          onClick={handleClick}
        >
          开始测评
        </div>
      </div>
    </div>
  );
};

const Shome: React.FC = () => {
  const authModel = useModel('auth');
  const history = useHistory();
  const handleLogout = () => {
    authModel.logout();
  };

  const goToHolland = () => {
    history.push('/student/holland');
  };

  const goToValues = () => {
    history.push('/student/values');
  };
  return (
    <div className="container mx-auto">
      <Header
        title="深圳市学生生涯发展支持平台"
        onLogout={handleLogout}
      />
      <div className="w-full h-64">
        <img src={BannerImg} alt="" className="block w-full h-full" />
      </div>
      <section>
        <h4 className="border-0 border-b-2 border-gray-400 border-solid text-xl p-4 text-center">
          学生主页
        </h4>
        <div className="flex justify-around w-full">
          <TestItem
            img={hollandImg}
            title="中学生霍兰德职业兴趣测评"
            onClick={goToHolland}
          />
          <TestItem
            img={valuesImg}
            title="价值观测试"
            onClick={goToValues}
          />
        </div>
      </section>
    </div>
  );
};

export default Shome;
