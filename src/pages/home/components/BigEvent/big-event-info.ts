/*
 * @Author: yuyang
 * @Date: 2021-08-31 17:50:14
 * @LastEditTime: 2021-10-09 19:09:15
 * @LastEditors: yuyang
 */
import BigeventImage from '@/assets/bigevent.svg';

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
    date: '2021-10-01',
    image: BigeventImage,
    title: '南科大隆重举行国庆升旗仪式',
    content: '2021年10月1日，我校在松禾体育场隆重举行2021年国庆升旗仪式。校党委书记李凤亮，校长薛其坤等领导班子成员、学校有关部门负责人，教师代表，各书院学生代表及研究生代表参加了升旗仪式。仪式由学生工作部部长薛铮主持。',
  },
  {
    id: 2,
    date: '2021-10-30',
    image: BigeventImage,
    title: '2021-05-01的事件标题',
    content: '2021-05-01的事件内容',
  },
  {
    id: 3,
    date: '2021-10-31',
    image: BigeventImage,
    title: '2021-05-02的事件标题',
    content: '2021-05-02的事件内容',
  },
];

export default BigEventInfos;
