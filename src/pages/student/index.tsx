/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-09-10 18:12:20
 * @LastEditors: yuyang
 */
import React from 'react';
import NewsContainer from '@/components/NewsContainer';
import NewsList, { TabType } from '@/components/NewsList';
import SliderNews from './components/SliderNews';

const tabs1: TabType[] = [
  {
    tabKey: 'notice',
    tabTitle: '公告公示',
    newsList: [
      {
        id: '1',
        title: '教育部等六部门关于加强新时代高校教师队伍建设改革的指导意见',
      },
      {
        id: '2',
        title: '国务院办公厅关于加快医学教育创新发展的指导意见',
      },
      {
        id: '3',
        title: '教育部 国家发展改革委 财政部关于加快新时代研究生教育改革发展的意见',
      },
      {
        id: '4',
        title: '深圳市教育局关于公布2020年中小学生艺术展演班级合唱及戏剧节活动获...',
      },
      {
        id: '5',
        title: '深圳市教育局 深圳市卫生健康委员会关于开展中小学生脊柱侧弯筛查的通..',
      },
      {
        id: '6',
        title: '深圳市教育局关于开展2020年深圳市中小学生羽毛球比赛的通知',
      },
    ],
  },
  {
    tabKey: 'question',
    tabTitle: '常见问题',
    newsList: [
      {
        id: '7',
        title: '深圳市2021年义务教育阶段新生招生问答',
      },
      {
        id: '8',
        title: '高中阶段应尽早开展职业生涯规划',
      },
      {
        id: '9',
        title: '学籍的主要功能是什么？',
      },
      {
        id: '10',
        title: '全国中小学生学籍信息管理系统多久会发布正式学籍号',
      },
      {
        id: '11',
        title: '全国中小学生学籍信息管理系统以“G”字头正式学籍的“姓名”怎样修改？',
      },
      {
        id: '12',
        title: '全国中小学生学籍信息管理系统什么时候可以发启转学业务？',
      },
    ],
  },
];

const tabs2: TabType[] = [
  {
    tabKey: 'policyDocument',
    tabTitle: '政策文件',
    newsList: [
      {
        id: '13',
        title: '青岛：中小学生涯教育有了课时保障',
      },
      {
        id: '14',
        title: '上海交通大学努力打造学生生涯教育精品课程',
      },
      {
        id: '15',
        title: '上海交通大学“三大平台”构建学生生涯教育实践长效机制',
      },
      {
        id: '16',
        title: '重庆大学积极探索拔尖人才生涯教育模式',
      },
      {
        id: '17',
        title: '加强高中阶段教育学生生涯指导',
      },
      {
        id: '18',
        title: '909万高校毕业生，如何走好就业第一步',
      },
    ],
  },
  {
    tabKey: 'policyInterpretation',
    tabTitle: '政策解读',
    newsList: [
      {
        id: '19',
        title: '对《美国高等教育行动计划》的解读',
      },
      {
        id: '20',
        title: '专家解读：推动职教高质量发展 重在强化类型特色',
      },
      {
        id: '21',
        title: '专家解读《关于进一步减轻义务教育阶段学生作业负担和校外培训负担的意见》',
      },
      {
        id: '22',
        title: '教育收费政策解读',
      },
      {
        id: '23',
        title: '教育部办公厅关于印发《教育部基础教育教学指导委员会章程》的通知',
      },
      {
        id: '24',
        title: '推动省级人民政府切实履行教育职责',
      },
    ],
  },

];

const Index: React.FC = () => (
  <div className="w-full text-4xl">
    <NewsContainer>
      <div className="container mx-auto bg-white py-2">
        <div className="p-8 w-full">
          <SliderNews />
        </div>
        <div className="p-8 w-full flex justify-center items-start">
          <div className="w-1/2 border-0 border-r border-solid border-gray-400 p-8 pb-0">
            <NewsList listStyle="circle" tabs={tabs1} />
          </div>
          <div className="w-1/2 p-8">
            <NewsList listStyle="square" tabs={tabs2} />
          </div>
        </div>
        <div className="w-3/4 mx-auto p-4 border-2 border-solid border-gray-400">
          <h3 className="border-0 border-b border-solid border-gray-400 text-center pb-8">
            <span className="inline-block px-8 py-2 border-0 border-b-2 border-solid border-primary">高考资讯类</span>
          </h3>

        </div>
      </div>
    </NewsContainer>
  </div>
);

export default Index;
