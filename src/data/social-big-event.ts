/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-08-31 17:50:14
 * @LastEditTime: 2021-10-19 16:22:13
 * @LastEditors: yuyang
 */

export interface BigEventInfoType {
  id: number;
  date: string;
  title: string;
  enterpriseName: string;
}

const BigEventInfos: BigEventInfoType[] = [
  {
    id: 1,
    date: '2021-11-30',
    title: '华为公司坂田总部基地华为大学参访',
    enterpriseName: '华为',
  },
  {
    id: 2,
    date: '2021-12-12',
    title: '腾讯滨海总部运营部工作流程体验',
    enterpriseName: '腾讯',
  },
  {
    id: 3,
    date: '2021-12-28',
    title: '理财大使及教育计划',
    enterpriseName: '招商银行',
  },
];

export default BigEventInfos;
