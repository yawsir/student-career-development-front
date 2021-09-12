/*
 * @Author: yuyang
 * @Date: 2021-09-10 16:21:40
 * @LastEditTime: 2021-09-12 18:19:40
 * @LastEditors: yuyang
 */
import React from 'react';
import { Tabs, Typography, TabsProps } from 'antd';
import { Link } from 'umi';

export interface NewsType {
  id: string;
  title: string;
  date?: string;
}

export interface TabType {
  tabKey: string;
  tabTitle: string;
  newsList: NewsType[];
}

interface NewsListProps {
  tabs: TabType[];
  listStyle?: 'square' | 'circle';
  showDate?: boolean;
  renderTabBar?: TabsProps['renderTabBar'];
  tabBarStyle?: React.CSSProperties;
}

interface NewsItemProps extends NewsType {
  listStyle?: 'square' | 'circle';
  showDate: boolean;
}

const Circle = () => (
  <span className="relative bottom-1 mr-1 w-2 h-2 bg-primary inline-block rounded-full" />
);

const Square = () => (
  <span className="mr-1 w-2 h-4 bg-primary inline-block" />
);

const NewsItem: React.FC<NewsItemProps> = (props) => {
  const { id, title, date, listStyle, showDate } = props;
  return (
    <Link to={`/article/${id}`} className="text-center">
      <p className="text-xl text-black hover:text-blue-400 transition flex justify-between">
        <Typography.Text ellipsis>
          {
            listStyle
              && (listStyle === 'circle'
                ? <Circle />
                : <Square />)
          }
          {title}
        </Typography.Text>
        {
          showDate
          && <span className="block w-64 text-right">{date}</span>
        }
      </p>
    </Link>
  );
};

const NewsList: React.FC<NewsListProps> = (props) => {
  const { tabs, listStyle, showDate = false, renderTabBar, tabBarStyle } = props;
  if (tabs.length && tabs.length === 1) {
    return (
      <div>
        {
          tabs[0].newsList.map((news) => (
            <NewsItem key={news.id} listStyle={listStyle} showDate={showDate} {...news} />
          ))
        }
      </div>
    );
  }
  return (
    <Tabs renderTabBar={renderTabBar} tabBarStyle={tabBarStyle}>
      {
        tabs.map(({ newsList, tabKey, tabTitle }) => (
          <Tabs.TabPane key={tabKey} tab={tabTitle}>
            {
              newsList.map((news) => (
                <NewsItem key={news.id} listStyle={listStyle} showDate={showDate} {...news} />
              ))
            }
          </Tabs.TabPane>
        ))
      }
    </Tabs>
  );
};

export default NewsList;
