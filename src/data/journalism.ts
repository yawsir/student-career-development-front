/*
 * @Author: yuyang
 * @Date: 2021-10-13 13:27:28
 * @LastEditTime: 2021-10-13 13:35:25
 * @LastEditors: yuyang
 */
import news1 from '@/assets/news1.png';
import news2 from '@/assets/news2.png';
import news3 from '@/assets/news3.png';

interface JournalismInfo {
  id: string;
  date: string;
  description: string;
  image: any;
  title: string;
  content: string;
}

const journalismInfoList: JournalismInfo[] = [
  {
    id: 'j1',
    date: '2021-09-27',
    description: '助力省基础教育教研基地项目建设，教科院加强成果培育指导',
    image: news1,
    title: '助力省基础教育教研基地项目建设，教科院加强成果培育指导',
    content: `
      <p className="text-lg leading-loose">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近期，省教育厅公布了145个教研基地为2021年广东省基础教育教研基地项目，本批教研基地项目完成时间为2023年12月31日。
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9月16日，为推进深圳市“广东省基础教育教研基地项目建设”，深圳市教育科学研究院开展了项目成果培育指导会议，院长李桂娟，副院长潘希武出席会议，黄爱华主任主持会议。
      </p>
    `,
  },
  {
    id: 'j2',
    date: '2021-10-12',
    description: '第一批党建工作示范校——壆岗小学创新形式落实“双减”',
    image: news2,
    title: '第一批党建工作示范校——壆岗小学创新形式落实“双减”',
    content: `
      <p className="text-lg leading-loose">
        9月24日下午，中共宝安县第一次党员代表大会教育基地和东宝行政督导处旧址迎来一群学生，认真聆听向导解说激情澎湃的历史。这群学生人手一份研学任务单，且每12-13人为一支小分队边参观边合作学习，在老师的组织下进行党史知识现场抢答。他们，是宝安区教育系统第一批党建工作示范校——壆岗小学新组建的党史寻踪团
      </p>
    `,
  },
  {
    id: 'j3',
    date: '2021-10-12',
    description: '探寻“减负”与“提质”交点，深圳大鹏新区学校作业管理“量体裁衣”',
    image: news3,
    title: '探寻“减负”与“提质”交点，深圳大鹏新区学校作业管理“量体裁衣”',
    content: `
      <p className="text-lg leading-loose">
        2021年秋季新学期开学以来，深圳各区各校积极落实“双减”政策，减负提质促发展，充分发挥育人主阵地作用，持续激发校园活力。在“双减”政策的背景下，大鹏新区高度重视、积极响应，出台《大鹏新区教育和卫生健康局加强义务教育学校作业管理实施方案》，要求各校建立“一校一案”作业管理机制，制定作业检查公示制度，那么，各学校在作业管理方面都有哪些特色亮点呢？
      </p>
    `,
  },
];

export default journalismInfoList;
