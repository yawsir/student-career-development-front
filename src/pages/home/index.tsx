/*
 * @Author: yuyang
 * @Date: 2021-05-04 15:25:51
 * @LastEditTime: 2021-05-07 17:14:24
 * @LastEditors: yuyang
 */
import React from 'react';
import SlideShow from '@/components/SlideShow';
import Broadcast from '@/components/Broadcast';
import styles from './index.less';

const Home: React.FC = () => (
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

  </div>
);

export default Home;
