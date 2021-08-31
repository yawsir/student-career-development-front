/*
 * @Author: yuyang
 * @Date: 2021-08-31 17:50:14
 * @LastEditTime: 2021-08-31 18:00:33
 * @LastEditors: yuyang
 */
import BigeventImage from '@/assets/bigevent.jpg';

export interface BigEventInfoType {
  id: number;
  date: string;
  image: any;
  title: string;
  content: string;
}

const BigEventInfos: BigEventInfoType[] = [
  {
    id: 1,
    date: '2021-04-29',
    image: BigeventImage,
    title: '2021普通高中新课程新教材实施生涯教育研讨活动',
    content: '为分享普通高中生涯规划课程建设经验，提升学科生涯渗透教育教学水平，推动普通高中育人方式变革，全面提升育人质量，4月29日，深圳市教育科学研究院在龙岗区横岗高级中学举行了深圳市2021年普通高中“新课程新教材实施生涯教育”研讨活动。',
  },
  {
    id: 2,
    date: '2021-05-30',
    image: BigeventImage,
    title: '2021普通高中新课程新教材实施',
    content: '为分享普通高中生涯规划课程建设经验，提升',
  },
];

export default BigEventInfos;
