/*
 * @Author: yuyang
 * @Date: 2021-08-29 14:51:07
 * @LastEditTime: 2021-09-16 13:56:23
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

export interface Job {
  id: string;
  hollandCode: HollandCodeType | HollandCodeType[];
  jobName: string;
  jobDesc: string[];
}
export interface CareenInfoType {
  id: string | number;
  name: string;
  hollandCode: HollandCodeType[];
  icon: any;
  jobs?: Job[];
}

const careerInfoList: CareenInfoType[] = [
  {
    id: 1,
    name: '运输与仓储',
    hollandCode: ['ESC', 'RCI', 'RCE'],
    icon: icon1,
    jobs: [
      {
        id: '1-1',
        hollandCode: 'ESC',
        jobName: '乘务员',
        jobDesc: [
          '乘务员的主要职责是为乘客提供热情优质的服务，确保 旅客出行舒适与安全，并及时处理旅途中的各种突发事件',
          '接待和引领乘客至指定座位',
          '提供飞机/铁路/航运等航程及安全资讯',
          '为乘客准备及安排餐饮服务',
          '回答乘客询问、照顾乘客需要',
          '售卖免税商品',
          '保持机舱/客舱/船舱等清洁、清理垃圾',
        ],
      },
      {
        id: '1-2',
        hollandCode: 'RCI',
        jobName: '飞行员',
        jobDesc: [
          '行动机师需要经过密集的训练及累积多年经验才能成为专业飞行员',
          '进行搜索及拯救行动、运送伤者',
          '打击罪行及扑灭山火',
          '支援政府其他部门行动，如民政事务总署、海事处、民 航处及政府新闻处等',
        ],
      },
      {
        id: '1-3',
        hollandCode: 'RCE',
        jobName: '赛车手',
        jobDesc: [
          '普通人考取普通驾驶本后可以参加中汽联的赛手培训班，分为拉力培训和场地培训，拉力培训出来的是F级赛车驾照，场地一般是C级赛车驾照，车手参加6场以上的比赛后，可以申请更高一级的赛照，以此类推， 国内B本可以申请国际汽联赛车驾照，就可以参加国际级别的赛事了成为赛车手。',
        ],
      },
    ],
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
