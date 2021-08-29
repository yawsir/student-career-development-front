/*
 * @Author: yuyang
 * @Date: 2021-08-29 14:51:07
 * @LastEditTime: 2021-08-29 16:08:08
 * @LastEditors: yuyang
 */
import icon1 from '@/assets/career_icons/1.png';
import icon2 from '@/assets/career_icons/2.png';
import icon3 from '@/assets/career_icons/3.png';
import icon4 from '@/assets/career_icons/4.png';
import icon5 from '@/assets/career_icons/5.png';
import icon6 from '@/assets/career_icons/6.png';
import icon7 from '@/assets/career_icons/7.png';
import icon8 from '@/assets/career_icons/8.png';
import icon9 from '@/assets/career_icons/9.png';
import icon10 from '@/assets/career_icons/10.png';
import icon11 from '@/assets/career_icons/11.png';
import icon12 from '@/assets/career_icons/12.png';
import icon13 from '@/assets/career_icons/13.png';
import icon14 from '@/assets/career_icons/14.png';
import icon15 from '@/assets/career_icons/15.png';
import icon16 from '@/assets/career_icons/16.png';
import icon17 from '@/assets/career_icons/17.png';

export type HollandCodeType = 'AEC' | 'AEI' | 'AES' | 'AIR' | 'ARE' | 'ASC' | 'ASE' | 'CIA' | 'CIE' | 'EAC' |
'EAI' | 'EAS' | 'ECI' | 'ECR' | 'ECS' | 'EIS' | 'ERS' | 'ESC' | 'IAR' | 'ICE' | 'ICS' | 'ISA' | 'ISR' | 'RAC' |
'RAS' | 'RCE' | 'RCI' | 'RCS' | 'REA' | 'REC' | 'RIA' | 'RIC' | 'RIE' | 'RIS' | 'RSC' | 'RSE' | 'SAC' | 'SAI' | 'SCI' | 'SEA' | 'SEI' | 'SIA' | 'SIR' | 'SRE';

export interface CareenInfoType {
  id: number;
  name: string;
  hollandCode: HollandCodeType[];
  icon: any;
}

const careerInfoList: CareenInfoType[] = [
  {
    id: 1,
    name: '运输与仓储',
    hollandCode: ['ESC', 'RCI', 'RCE'],
    icon: icon1,
  },
  {
    id: 2,
    name: '保健和社会援助',
    hollandCode: ['ICS', 'SIR', 'ISA', 'ISR'],
    icon: icon2,
  },
  {
    id: 3,
    name: '法律',
    hollandCode: ['EIS'],
    icon: icon3,
  },
  {
    id: 4,
    name: '房地产和租赁',
    hollandCode: ['ECS', 'ECR'],
    icon: icon4,
  },
  {
    id: 5,
    name: '公司和企业管理',
    hollandCode: ['ECS', 'ECR', 'ECS'],
    icon: icon5,
  },
  {
    id: 6,
    name: '建设',
    hollandCode: ['AIR', 'RIC'],
    icon: icon6,
  },
  {
    id: 7,
    name: '教育服务',
    hollandCode: ['SAC', 'SIA'],
    icon: icon7,
  },
  {
    id: 8,
    name: '金融和保险',
    hollandCode: ['ECS', 'ECS', 'CIE'],
    icon: icon8,
  },
  {
    id: 9,
    name: '零售批发贸易',
    hollandCode: ['RAC', 'RCS'],
    icon: icon9,
  },
  {
    id: 10,
    name: '设计',
    hollandCode: ['ARE', 'ARE'],
    icon: icon10,
  },
  {
    id: 11,
    name: '市场推广和公关',
    hollandCode: ['EAS', 'ECS'],
    icon: icon11,
  },
  {
    id: 12,
    name: '信息',
    hollandCode: ['AEI', 'AES', 'AES', 'AES'],
    icon: icon12,
  },
  {
    id: 13,
    name: '行政与支持服务',
    hollandCode: ['RAC', 'RSC', 'SEA', 'AIR', 'RIC', 'ECS'],
    icon: icon13,
  },
  {
    id: 14,
    name: '艺术与娱乐',
    hollandCode: ['SRE', 'AIR', 'EAC', 'AES', 'ASE', 'AIR'],
    icon: icon14,
  },
  {
    id: 15,
    name: '政府',
    hollandCode: ['ESC', 'RSE', 'ERS'],
    icon: icon15,
  },
  {
    id: 16,
    name: '科学和技术服务',
    hollandCode: ['ICE', 'RIC', 'RIC', 'RIC', 'IAR'],
    icon: icon16,
  },
  {
    id: 17,
    name: '住宿和餐饮服务',
    hollandCode: ['REA', 'REC', 'REC', 'ECS'],
    icon: icon17,
  },
];

export const hollandCodes = ['AEC', 'AEI', 'AES', 'AIR', 'ARE', 'ASC', 'ASE', 'CIA', 'CIE', 'EAC',
  'EAI', 'EAS', 'ECI', 'ECR', 'ECS', 'EIS', 'ERS', 'ESC', 'IAR', 'ICE', 'ICS', 'ISA', 'ISR', 'RAC',
  'RAS', 'RCE', 'RCI', 'RCS', 'REA', 'REC', 'RIA', 'RIC', 'RIE', 'RIS', 'RSC', 'RSE', 'SAC', 'SAI', 'SCI', 'SEA', 'SEI', 'SIA', 'SIR', 'SRE'];

export default careerInfoList;
