/*
 * @Author: yuyang
 * @Date: 2021-10-19 14:06:42
 * @LastEditTime: 2021-10-19 15:16:09
 * @LastEditors: yuyang
 */
import dji from '@/assets/social/logos/logo_dji.png';
import huada from '@/assets/social/logos/logo_huada.png';
import huawei from '@/assets/social/logos/logo_huawei.png';
import oct from '@/assets/social/logos/logo_oct.png';
import tencent from '@/assets/social/logos/logo_tencent.png';
import vanke from '@/assets/social/logos/logo_vanke.png';
import zhaoshang from '@/assets/social/logos/logo_zhaoshang.png';
import zte from '@/assets/social/logos/logo_zte.png';

export interface Activity {
  id: string;
  name: string;
  type: string;
  enterprise: string;
  date: string;
  limit: string;
}

export interface EnterpriseActivity {
  id: string;
  logo: any;
  activities: Activity[];
}

const enterpriseActivities: EnterpriseActivity[] = [
  {
    id: '1',
    logo: huawei,
    activities: [
      {
        id: '1-1',
        name: '华为公司坂田总部基地华为大学参访',
        type: '参观访问',
        enterprise: '华为',
        date: '2021年11月30日',
        limit: '2021年11月15日',
      },
    ],
  },
  {
    id: '2',
    logo: tencent,
    activities: [
      {
        id: '2-1',
        name: '腾讯滨海总部基地运营部工作流程体验',
        type: '工作体验',
        enterprise: '腾讯',
        date: '2021年12月12日',
        limit: '2021年12月1日',
      },
    ],
  },
  {
    id: '3',
    logo: zhaoshang,
    activities: [
      {
        id: '3-1',
        name: '理财大使及教育计划',
        type: '讲座',
        enterprise: '招商银行',
        date: '2021年12月28日',
        limit: '2021年12月15日',
      },
    ],
  },
  {
    id: '4',
    logo: huada,
    activities: [],
  },
  {
    id: '5',
    logo: vanke,
    activities: [],
  },
  {
    id: '6',
    logo: zte,
    activities: [],
  },
  {
    id: '7',
    logo: oct,
    activities: [],
  },
  {
    id: '8',
    logo: dji,
    activities: [],
  },
];

export default enterpriseActivities;
