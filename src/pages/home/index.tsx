/*
 * @Author: yuyang
 * @Date: 2021-05-04 15:25:51
 * @LastEditTime: 2021-09-12 10:50:35
 * @LastEditors: yuyang
 */
import React from 'react';
import SlideShow from '@/components/SlideShow';
import news1 from '@/assets/news1.jpg';
import news2 from '@/assets/news2.jpg';
import news3 from '@/assets/news3.jpg';
import journalismBg from '@/assets/bgs/journalism.jpg';
import BigEvent from './components/BigEvent';
import Journalism from './components/Journalism';

const Home: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState<string>('j1');
  const handleClickDescription = (name: string) => {
    setActiveKey(name);
  };
  return (
    <div className="w-full">
      <section
        className="w-full"
      >
        <SlideShow />
      </section>
      <section className="w-full my-0 py-2 bg-custom-white2">
        <BigEvent />
      </section>
      <section className="px-0 lg:px-16 py-8 bg-cover bg-center bg-no-repeat" style={{ background: `url(${journalismBg})` }}>
        <Journalism
          title="新闻动态/journalism"
          activeKey={activeKey}
          onClick={handleClickDescription}
          defaultActive="j1"
        >
          <Journalism.Description
            date="2020-01-01"
            name="j1"
            description={(
              <div>
                <p className="font-bold">2019年深圳市高三年级第一次调研考试整体分析会顺利召开</p>
                <p>3月8日上午，2019年年深圳市高三年级第一次调研考试（“深一模”）整体分析会于福田区红岭中学顺利召开。会议由深圳市教科院李桂娟副院长主持，各区教研中心(教科培中心)负责人、 高中学科教研员、全市各高中学校分管教学副校长、高三年级长等约300人参加了本次会谈。</p>
              </div>
            )}
          >
            <Journalism.Content image={news1}>
              <h3 className="text-center text-4xl">2019年深圳市高三年级第一次调研考试整体分析会顺利召开</h3>
              <p className="text-lg 2">
                3月8日上午，2019年年深圳市高三年级第一次调研考试（“深一模”）整体分析会于福田区红岭中学顺利召开。会议由深圳市教科院李桂娟副院长主持，各区教研中心(教科培中心)负责人、 高中学科教研员、全市各高中学校分管教学副校长、高三年级长等约300人参加了本次会谈。
              </p>
            </Journalism.Content>
          </Journalism.Description>
          <Journalism.Description
            date="2020-01-02"
            name="j2"
            description={(
              <div>
                <p className="font-bold">深圳市教育科学研究院与华中师范大学签订合作协议</p>
                <p>深圳市教育科学研究院与华中师范大学签订中小学 (中职)历史国家教材建设重点研究基地研究分中心合作协议</p>
              </div>
            )}
          >
            <Journalism.Content image={news2}>
              探索复习备考策略培育学科核心素养深圳市2020年地理学科高三老师培训活动，2019年9月11日下午，由深圳市教育科学研究院组织召开的2020年深圳市地理学科高考备考培训会在深圳市红岭高中部顺利举行，来自全市240多名高中地理教师参加了这次培训活动。
              本次会议特别邀请了专家华南师范大学地理科学院张争胜教授，深圳市教科院高中教研中心龚湘玲主任莅临指导。地理教研员刘筱清老师主持会议。
            </Journalism.Content>
          </Journalism.Description>
          <Journalism.Description
            date="2020-01-03"
            name="j3"
            description={(
              <div>
                <p className="font-bold">不忘初心不负韶华</p>
                <p>----记2020年高三年级政治学科教师培训活动</p>
              </div>
            )}
          >
            <Journalism.Content image={news3}>
              深圳市教育科学研究院与华中师范大学签订中小学(中职)历史国家教材建设重点研究基地研究分中心合作协议，2019年10月27日，中小学(中职)历史国家教材建设重点研究基地(以下简称“基地”)成立大会在华中师范大学逸夫国际会议中心举行。
              深圳市教育科学研究院作为首批基地研究分中心(全国共六家单位)，出席本次会议，并与基地负责人签订合作协议。本次会议由华中师范大学副校长彭南生主持。湖北省人大常委会副主任周洪宇，校长、党委书记赵凌云和原华中师范大学党委书记、基地主任马敏教授共同为基地揭牌。
            </Journalism.Content>
          </Journalism.Description>
        </Journalism>
      </section>
    </div>
  );
};

export default Home;
