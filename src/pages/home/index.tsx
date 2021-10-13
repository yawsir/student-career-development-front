/*
 * @Author: yuyang
 * @Date: 2021-05-04 15:25:51
 * @LastEditTime: 2021-10-13 14:40:45
 * @LastEditors: yuyang
 */
import React from 'react';
import NewsContainer from '@/components/NewsContainer';
import homebg from '@/assets/bgs/homebg.png';
import journalismInfoList from '@/data/journalism';
import SlideShow from './components/SlideShow';
import BigEvent from './components/BigEvent';
import Journalism from './components/Journalism';
import FriendLinks from './components/FriendLinks';

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
            {
              journalismInfoList.map((item) => (
                <Journalism.Description
                  key={item.id}
                  date={item.date}
                  name={item.id}
                  description={item.description}
                >
                  <Journalism.Content image={item.image} title={item.title}>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </Journalism.Content>
                </Journalism.Description>
              ))
            }
          </Journalism>
        </section>
        <section className="w-full py-8">
          <FriendLinks />
        </section>
      </div>
    </NewsContainer>
  );
};

export default Home;
