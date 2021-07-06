/*
 * @Author: yuyang
 * @Date: 2021-05-04 15:25:51
 * @LastEditTime: 2021-07-06 17:58:21
 * @LastEditors: yuyang
 */
import React from 'react';
import SlideShow from '@/components/SlideShow';
import Broadcast from '@/components/Broadcast';
import testImg from '@/assets/yay.jpg';
import Journalism from './components/Journalism';
import styles from './index.less';

const Home: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState<string>('j1');
  const handleClickDescription = (name: string) => {
    setActiveKey(name);
  };
  return (
    <div className={styles.home}>
      <section
        className={styles.home__slider}
      >
        <SlideShow />
      </section>
      <div className={styles.home__notification}>
        <Broadcast>
          否定兰陵飞来寺将赛季法令三分龙肯将空扽就，就法令三菱法。厄拉两反龙哦法令三楼减肥龙看法龙肯零散，疯狂东京弗拉斯克
        </Broadcast>
      </div>
      <div className={styles.home__journalism}>
        <Journalism title="新 闻 动 态 / j o u r n a l i s m">
          <div className={styles['home__journalism__description-wrap']}>
            <Journalism.Descriptions activeKey={activeKey} onClick={handleClickDescription}>
              <Journalism.Descriptions.Item date="2020-01-01" name="j1">111</Journalism.Descriptions.Item>
              <Journalism.Descriptions.Item date="2020-01-02" name="j2">222</Journalism.Descriptions.Item>
              <Journalism.Descriptions.Item date="2020-01-03" name="j3">333</Journalism.Descriptions.Item>
            </Journalism.Descriptions>
          </div>
          <Journalism.Content image={testImg}>
            在这里，e 是一个合成事件。React 根据 W3C 规范来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。如果想了解更多，请查看 SyntheticEvent 参考指南。
            使用 React 时，你一般不需要使用 addEventListener 为已创建的 DOM 元素添加监听器。事实上，你只需要在该元素初始渲染的时候添加监听器即可。
            当你使用 ES6 class 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。例如，下面的 Toggle 组件会渲染一个让用户切换开关状态的按钮：
          </Journalism.Content>
        </Journalism>
      </div>
    </div>
  );
};

export default Home;
