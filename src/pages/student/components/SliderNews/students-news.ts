/*
 * @Author: yuyang
 * @Date: 2021-09-10 14:34:12
 * @LastEditTime: 2021-09-10 14:42:13
 * @LastEditors: yuyang
 */
import slider1 from '@/assets/sliders/studentNews1.jpg';
import slider2 from '@/assets/sliders/studentNews2.jpg';
import slider3 from '@/assets/sliders/studentNews3.jpg';

interface StudentNewsType {
  id: string;
  image: any;
  date: string;
  title: string;
  content: string;
}

const studentNews: StudentNewsType[] = [
  {
    id: '1',
    image: slider1,
    date: '2019-10-09',
    title: '深圳市小学阶段生涯教育试点启动',
    content: '日前，深圳市首批生涯教育试点小学教师培训活动在园岭小学举行，标志着我市小学阶段生涯教育试点工作正式开展。市教育科学研究院确定了25所小学成为小学职业生涯教育项目的首批试点学校，将从课程设置、职业体验活动等方面帮助学生认识自我、认识职业。',
  },
  {
    id: '2',
    image: slider2,
    date: '2021-04-15',
    title: '职业教育的“深圳模式”什么样',
    content: '“在全面建设社会主义现代化国家新征程中，职业教育前途广阔、大有可为。”近日，习近平总书记对职业教育工作作出重要指示，为加快构建现代职业教育体系指明了方向。如今，我国已建成世界规模最大职业教育体系，职业教育为各行各业培养了大批技能人才。',
  },
  {
    id: '3',
    image: slider3,
    date: '2019-11-25',
    title: '高中阶段应尽早开展职业生涯规划',
    content: '职业生涯是人生的重要部分，是影响人生发展高度的关键所在，而职业生涯应从何时开始规划为宜则一直观点不一。在当前教育改革框架下，笔者认为，推进职业生涯规划教育至少要提前到高中阶段。',
  },
];

export default studentNews;
