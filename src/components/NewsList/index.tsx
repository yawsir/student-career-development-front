/*
 * @Author: yuyang
 * @Date: 2021-09-10 16:21:40
 * @LastEditTime: 2021-09-10 18:00:46
 * @LastEditors: yuyang
 */
import React from 'react';
import { Tabs } from 'antd';
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
}

interface NewsItemProps extends NewsType {
  listStyle?: 'square' | 'circle';
}

const Circle = () => (
  <span className="relative bottom-1 mr-1 w-2 h-2 bg-primary inline-block rounded-full" />
);

const Square = () => (
  <span className="mr-1 w-2 h-4 bg-primary inline-block" />
);

const NewsItem: React.FC<NewsItemProps> = (props) => {
  const { id, title, listStyle } = props;
  return (
    <Link to={`/article/${id}`}>
      <p className="text-xl text-black hover:text-blue-400 transition whitespace-nowrap overflow-hidden overflow-ellipsis">
        {
          listStyle
            && (listStyle === 'circle'
              ? <Circle />
              : <Square />)
        }
        {title}
      </p>
    </Link>
  );
};

const NewsList: React.FC<NewsListProps> = (props) => {
  const { tabs, listStyle } = props;
  return (
    <Tabs>
      {
        tabs.map(({ newsList, tabKey, tabTitle }) => (
          <Tabs.TabPane key={tabKey} tab={tabTitle}>
            {
              newsList.map((news) => (
                <NewsItem key={news.id} listStyle={listStyle} {...news} />
              ))
            }
          </Tabs.TabPane>
        ))
      }
    </Tabs>
  );
};

export default NewsList;
