/*
 * @Author: yuyang
 * @Date: 2021-09-16 22:16:10
 * @LastEditTime: 2021-10-14 15:50:35
 * @LastEditors: haoyh
 */
// create by hygen
import React, { useState } from 'react';
import techer1 from '@/assets/teacher/teacher01.png';
import techer2 from '@/assets/teacher/teacher02.png';
import techer3 from '@/assets/teacher/teacher03.png';
import techer4 from '@/assets/teacher/teacher04.png';
import TeacherItem from './item';

export interface TipValuesType {
  editHere: string;
}

interface TipModalProps {
  modalTitle?: React.ReactNode;
  onClose?: Function;
}

const TeacherList = [
  {
    id: '1',
    img: techer1,
    name: '候志瑾',
    des: '研究方向：心理咨询过程与效果研究；大学生生涯发展与规划；亲子关系与青少年情绪调节；跨文化适应。',
  },
  {
    id: '2',
    img: techer2,
    name: '陈宛豫',
    des: '研究方向：心理咨询过程与效果研究方向：生涯辅导、学校心育与统计测评，主要研究方向为生涯发展与教育。究；大学生生涯发展与规划；亲子关系与青少年情绪调节；跨文化适应。',
  },
  {
    id: '3',
    img: techer3,
    name: '方晓义',
    des: '研究方向：家庭研究与治疗；青少年成瘾行为；流动人口艾滋病预防干预与心理健康。',
  },
  {
    id: '4',
    img: techer4,
    name: '盖笑松',
    des: '研究方向：儿童大脑执行功能的发展与促进；儿童的社会情感学习与教育；青少年人生观的发展与培养；支持学生的自主成长',
  },
];

const TeacherCard: React.FC<TipModalProps> = () => (
  <>
    {
      TeacherList.map((item) => (
        <TeacherItem item={item} key={item.id} />
      ))
    }
  </>
);

export default TeacherCard;
