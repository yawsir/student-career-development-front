/*
 * @Author: yuyang
 * @Date: 2021-09-10 16:21:40
 * @LastEditTime: 2021-10-14 14:46:14
 * @LastEditors: yuyang
 */
import React from 'react';
import { Tabs, TabsProps } from 'antd';
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
  barCentered?: boolean;
  textCentered?: boolean;
  tabBarGutter?: number;
  verticalCentered?: boolean;
}

interface NewsItemProps extends NewsType {
  listStyle?: 'square' | 'circle';
  showDate: boolean;
  textCentered: boolean;
  className?: string;
}

const Circle = () => (
  <span className="relative bottom-1 mr-1 w-2 h-2 bg-primary inline-block rounded-full" />
);

const Square = () => (
  <span className="mr-1 w-2 h-4 bg-primary inline-block" />
);

const textCenteredStyle: React.CSSProperties = {
  paddingLeft: '25%',
  transform: 'translateX(-12.5%)',
};
export const NewsItem: React.FC<NewsItemProps> = (props) => {
  const { id, title, date, listStyle, showDate, textCentered, className } = props;
  return (
    <Link to={`/article/${id}`} className="w-full block">
      <p
        className={`w-full text-lg text-black hover:text-blue-400 transition flex justify-between ${className}`}
        style={textCentered ? textCenteredStyle : {}}
      >
        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
          {
            listStyle
              && (listStyle === 'circle'
                ? <Circle />
                : <Square />)
          }
          {title}
        </span>
        {
          showDate
          && <span className="block w-64 text-right">{date}</span>
        }
      </p>
    </Link>
  );
};

const NewsList: React.FC<NewsListProps> = (props) => {
  const { tabs, listStyle, showDate = false, renderTabBar, tabBarStyle,
    barCentered = false, textCentered = false, tabBarGutter, verticalCentered = false } = props;
  if (tabs.length && tabs.length === 1) {
    return (
      <div className={`flex flex-wrap ${verticalCentered ? 'items-center' : 'items-start'}`}>
        {
          tabs[0].newsList.map((news) => (
            <NewsItem key={news.id} listStyle={listStyle} textCentered={textCentered} showDate={showDate} {...news} />
          ))
        }
      </div>
    );
  }
  return (
    <Tabs
      renderTabBar={renderTabBar}
      tabBarStyle={tabBarStyle}
      centered={barCentered}
      tabBarGutter={tabBarGutter}
    >
      {
        tabs.map(({ newsList, tabKey, tabTitle }) => (
          <Tabs.TabPane
            key={tabKey}
            tab={(
              <div className="text-xl">{tabTitle}</div>
            )}
          >
            {
              newsList.map((news) => (
                <NewsItem key={news.id} listStyle={listStyle} textCentered={textCentered} showDate={showDate} {...news} />
              ))
            }
          </Tabs.TabPane>
        ))
      }
    </Tabs>
  );
};

export default NewsList;
