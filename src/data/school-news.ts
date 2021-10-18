/*
 * @Author: yuyang
 * @Date: 2021-10-18 10:17:26
 * @LastEditTime: 2021-10-18 10:26:33
 * @LastEditors: yuyang
 */
import news1 from '@/assets/school/news1.png';
import news2 from '@/assets/school/news2.png';
import news3 from '@/assets/school/news3.png';
import news4 from '@/assets/school/news4.png';

interface SchoolNews {
  id: string;
  date?: string;
  title: string;
  content: string;
  image: string;
}

export const activityList: SchoolNews[][] = [
  [
    {
      id: '1',
      date: '2021年10月09日',
      title: '江山千里秀  祖国万年春',
      content: '金秋送爽，万里河山披锦绣；丹桂飘香，实验坂田贺华章。值此新中国成立72周年之际，坂田校区全体师生开展庆国庆系列活动，为祖国献上深情告白',
      image: news1,
    },
    {
      id: '2',
      date: '2021年09月26日',
      title: '有效的教育，良好的关系——新校区举行2021-2022学年第二次班主任工作会议',
      content: '2021年9月22日下午，深圳中学新校区全体班主任参加了2021-2022学年第二次班主任工作会议。深圳中学校长朱华伟教授参加了会议。',
      image: news2,
    },
  ],
  [
    {
      id: '3',
      date: '2021年09月14日',
      title: '赓续百年初心 担当育人使命 ——我校举行第37个教师节庆祝活动',
      content: '“9月10日，福中人迎来了自己的节日——第37个教师节。今年教师节的主题是：赓续百年初心，担当育人使命。学校简朴地举办教师节庆祝活动',
      image: news3,
    },
    {
      id: '4',
      date: '2021年05月18日',
      title: '穿越山海间，彰显新风采——记深圳高级中学（集团）“五四”东西涌穿越活动',
      content: '南海之滨、鹏城东畔。为弘扬和传承“五四”精神，四大校区的年轻老师进行了一次意义非凡、别有滋味的远足活动——穿越东西涌。',
      image: news4,
    },
  ],
];

export default {};
