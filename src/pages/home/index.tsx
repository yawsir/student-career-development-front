/*
 * @Author: yuyang
 * @Date: 2021-05-04 15:25:51
 * @LastEditTime: 2021-10-09 18:44:41
 * @LastEditors: yuyang
 */
import React from 'react';
import SlideShow from '@/components/SlideShow';
import NewsContainer from '@/components/NewsContainer';
import news1 from '@/assets/news1.svg';
import news2 from '@/assets/news2.svg';
import news3 from '@/assets/news3.svg';
import homebg from '@/assets/bgs/homebg.png';
import BigEvent from './components/BigEvent';
import Journalism from './components/Journalism';

const Home: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState<string>('j1');
  const handleClickDescription = (name: string) => {
    setActiveKey(name);
  };
  return (
    <NewsContainer background={homebg}>
      <div className="w-full">
        <section
          className="w-full"
        >
          <SlideShow />
        </section>
        <section className="w-full my-0 py-2">
          <BigEvent />
        </section>
        <section className="px-0 lg:px-16 py-8 bg-cover bg-center bg-no-repeat">
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
                  <p className="font-bold">广东省基础教育小学体育与健康教研基地正式启动</p>
                </div>
              )}
            >
              <Journalism.Content image={news1}>
                <h3 className="text-center text-xl">广东省基础教育小学体育与健康教研基地正式启动</h3>
                <p className="text-base leading-relaxed">
                  深圳新闻网2021年9月3日讯 （记者 曹园芳）“体育，是世界上最好的教育。”在深圳市教科院体育教研员黄镇敏的主持下，
                  “广东省基础教育小学体育与健康教研基地项目论证暨启动会”于当日上午正式拉开了帷幕。
                </p>
              </Journalism.Content>
            </Journalism.Description>
            <Journalism.Description
              date="2020-01-02"
              name="j2"
              description={(
                <div>
                  <p className="font-bold text-base">校园春晚 | 走进2021优秀演出学校—— 深圳市教育科学研究院实验学校（光明）</p>
                </div>
              )}
            >
              <Journalism.Content image={news2}>
                <h3 className="text-center text-xl">校园春晚 | 走进2021优秀演出学校—— 深圳市教育科学研究院实验学校（光明）</h3>
                <p className="text-base leading-relaxed">
                  今年春节，受疫情影响，留深人数将创有史以来新高。深圳作为一座移民城市，外来人口居多，春节团圆、思乡情怀对于久居深圳的朋友们来说尤甚。
                  “来了就是深圳人”，今年过节不回家，不妨体验一个别样又难忘的新春佳节！留深过年怎么办，校园春晚邀你看！
                </p>
              </Journalism.Content>
            </Journalism.Description>
            <Journalism.Description
              date="2020-01-03"
              name="j3"
              description={(
                <div>
                  <p className="font-bold">不忘初心不负韶华</p>
                </div>
              )}
            >
              <Journalism.Content image={news3}>
                <h3 className="text-center text-xl">
                  探索复习备考策略培育学科核心素养
                  -------深圳市2020年地理学科高三老师培训活动
                </h3>
                <p className="text-base leading-loose">
                  2019年9月11日下午,由深圳市教育科学研究院组织召开的2020年深圳市地理学科高考备考培训会在深圳市红岭高中部顺利举行,来自全市240多名高中地理教师参加了这次培训活动。本次会议特别邀请了专家华南师范大学地理科学院张争胜教授,深圳市教科院高中教研中心龚湘玲主任莅临指导。地理教研员刘筱清老师主持会议。
                </p>
              </Journalism.Content>
            </Journalism.Description>
          </Journalism>
        </section>
      </div>
    </NewsContainer>
  );
};

export default Home;
