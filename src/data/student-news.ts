/*
 * @Author: yuyang
 * @Date: 2021-10-14 14:54:28
 * @LastEditTime: 2021-10-15 11:40:34
 * @LastEditors: yuyang
 */
import news1 from '@/assets/students/news/news1.png';
import news2 from '@/assets/students/news/news2.png';
import news3 from '@/assets/students/news/news3.png';
import news4 from '@/assets/students/news/news4.png';
import news5 from '@/assets/students/news/news5.png';
import news6 from '@/assets/students/news/news6.png';
import news7 from '@/assets/students/news/news7.png';
import news8 from '@/assets/students/news/news8.png';
import news9 from '@/assets/students/news/news9.png';
import news10 from '@/assets/students/news/news10.png';
import news11 from '@/assets/students/news/news11.png';
import news12 from '@/assets/students/news/news12.png';
import news13 from '@/assets/students/news/news13.png';

interface StudentNews {
  id: string;
  date?: string;
  title: string;
  content: string;
  image: string;
}
const list3: StudentNews[] = [
  {
    id: '7',
    title: '深圳北理莫斯科大学：暑期社会实践，深北莫人在路上',
    content: '为深入学习贯彻习近平新时代中国特色社会主义思想，深圳北理莫斯科大学鼓励学生在2021年暑假期间开展社会实践活动。',
    image: news7,
  },
  {
    id: '8',
    title: '贯彻“双减”，深圳育才教育集团联合齿轮梨等推进社会实践活动',
    content: '为贯彻落实国家“双减”政策，全面提升学生综合素质，第37个教师节后第一天，育才教育集团与具有社会责任意识的机构、企业合作',
    image: news8,
  },
  {
    id: '9',
    title: '2021年“展翅计划”深圳地区港澳台大学生暑期实习见面会顺利举办',
    content: '落实“展翅计划”港澳台大学生暑期内地实习专项行动工作要求，了解港澳台青年在实习过程中的体会、收获以及存在的困难',
    image: news9,
  },
];

const list2: StudentNews[] = [
  {
    id: '4',
    title: '深圳大学传播学院2021年暑期社会实践：山河映初心 党史咏流传',
    content: '深圳大学传播学院组织两支队伍共40余位师生开展暑期社会实践活动，引导青年学生将目光与脚步放到热情似火的川渝与广袤壮美的西北',
    image: news4,
  },
  {
    id: '5',
    title: '贯彻“双减”，深圳育才教育集团联合齿轮梨等推进社会实践活动',
    content: '为贯彻落实国家“双减”政策，全面提升学生综合素质，第37个教师节后第一天，育才教育集团与具有社会责任意识的机构、企业合作',
    image: news5,
  },
  {
    id: '6',
    title: '2021年“展翅计划”深圳地区港澳台大学生暑期实习见面会顺利举办',
    content: '落实“展翅计划”港澳台大学生暑期内地实习专项行动工作要求，了解港澳台青年在实习过程中的体会、收获以及存在的困难',
    image: news6,
  },
];

const list1: StudentNews[] = [
  {
    id: '1',
    title: '深圳中学携手深圳证券交易所，共建“证券创新体验中心”',
    content: '9月17日下午3时30分，深圳中学与深圳证券交易所共建“证券创新体验中心”启动仪式在深圳中学新校区举行。',
    image: news1,
  },
  {
    id: '2',
    title: '深高(集团)北校区初中部科创社植树活动',
    content: '中国古代将春分分为三候: "一候元鸟至;二候雷乃发声;三候始电。”便是说春分日后，燕子便从南方飞来了，下雨时天空便要打雷并发出闪电',
    image: news2,
  },
  {
    id: '3',
    title: '青才育苗 | 南山区2021年大学生“返家乡”社会实践活动圆满收官',
    content: '8月25日，南山区2021年“青才育苗”计划——大学生返家乡社会实践总结会在区青少年活动中心（滨海部）召开。',
    image: news3,
  },
];

export default [list1, list2, list3];

export const celebrityList1: StudentNews[] = [
  {
    id: '1',
    title: '【院长说】创新创意设计学院院长关道文：科技+设计，让“深圳设计”走向世界',
    date: '2021年07月22日',
    content: '2008年，深圳成为国内首个被联合国教科文组织授予“设计之都”称号的城市。近1.5万家创意设计机构。',
    image: news10,
  },
  {
    id: '2',
    title: '【毕业季故事汇】李赫奕：听从内心，在更广阔的世界向阳而生',
    date: '2021年06月13日',
    content: '作为优秀毕业生，李赫奕获得优秀一等奖奖学金，连续三年荣膺“致新之星”',
    image: news11,
  },
];

export const celebrityList2: StudentNews[] = [
  {
    id: '3',
    title: '【南科大讲堂】唐本忠院士畅谈“聚集体科学”',
    date: '2021年09月10日',
    content: '2021年09月10日，中国科学院院士、香港中文大学（深圳）理工学院院长唐本忠做客第293期南科大讲堂',
    image: news13,
  },
  {
    id: '4',
    title: '【南科大讲堂】马燕生教授畅谈国际组织和国际化人才',
    date: '2021年09月08日',
    content: '2021年9月8日，应南方科技大学国际合作部邀请，带来《国际组织需要什么人才从联合国教科文组织讲起》的主题报告',
    image: news12,
  },
];
