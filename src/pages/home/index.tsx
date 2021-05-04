/*
 * @Author: yuyang
 * @Date: 2021-05-04 15:25:51
 * @LastEditTime: 2021-05-04 16:36:42
 * @LastEditors: yuyang
 */
import React from 'react';
import SlideShow from '@/components/SlideShow';
import styles from './index.less';

const Home: React.FC = () => (
  <div className={styles.home}>
    <section
      className={styles.home__slider}
    >
      <SlideShow />
    </section>
  </div>
);

export default Home;
