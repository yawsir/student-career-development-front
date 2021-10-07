/*
 * @Author: yuyang
 * @Date: 2021-05-04 15:25:51
 * @LastEditTime: 2021-10-07 15:26:25
 * @LastEditors: yuyang
 */
import React from 'react';
import SlideShow from '@/components/SlideShow';
import NewsContainer from '@/components/NewsContainer';
import news1 from '@/assets/news1.jpg';
import news2 from '@/assets/news2.jpg';
import news3 from '@/assets/news3.jpg';
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
                <h3 className="text-center text-4xl">广东省基础教育小学体育与健康教研基地正式启动</h3>
                <p className="text-base leading-relaxed">
                  深圳新闻网2021年9月3日讯 （记者 曹园芳）“体育，是世界上最好的教育。”在深圳市教科院体育教研员黄镇敏的主持下，“广东省基础教育小学体育与健康教研基地项目论证暨启动会”于当日上午正式拉开了帷幕。
                  深圳市教科院院长李桂娟、福田区教科院院长郭其俊等领导嘉宾、深圳大学体育学院院长田野、中国教科院体卫艺研究所所长吴键、华东师范大学体育健康学院教授汪晓赞、
                  首都体育学院研究生部主任刘海元、广东省教科院体育教研员肖建忠、广东省第二师范学院体育健康学院院长张细谦、广东省教育厅体卫艺处科长车纯等指导专家，以及各基地实验校的校长，深圳各区体育教研员和体育骨干教师等出席了活动。
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
                <h3 className="text-center text-4xl">校园春晚 | 走进2021优秀演出学校—— 深圳市教育科学研究院实验学校（光明）</h3>
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
                <p className="text-base leading-loose">
                  深圳市教育科学研究院与华中师范大学签订中小学(中职)历史国家教材建设重点研究基地研究分中心合作协议，2019年10月27日，中小学(中职)历史国家教材建设重点研究基地(以下简称“基地”)成立大会在华中师范大学逸夫国际会议中心举行。
                  深圳市教育科学研究院作为首批基地研究分中心(全国共六家单位)，出席本次会议，并与基地负责人签订合作协议。本次会议由华中师范大学副校长彭南生主持。湖北省人大常委会副主任周洪宇，校长、党委书记赵凌云和原华中师范大学党委书记、基地主任马敏教授共同为基地揭牌。
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
