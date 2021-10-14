/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-09-10 14:34:12
 * @LastEditTime: 2021-10-14 10:39:31
 * @LastEditors: yuyang
 */
import slider1 from '@/assets/students/sliders/s1.svg';
import slider2 from '@/assets/students/sliders/s2.svg';
import slider3 from '@/assets/students/sliders/s3.svg';
import slider4 from '@/assets/students/sliders/s4.svg';
import slider5 from '@/assets/students/sliders/s5.svg';

interface StudentNewsType {
  id: string;
  image: any;
  title: string;
  content: string;
}

const studentNews: StudentNewsType[] = [
  {
    id: '1',
    image: slider1,
    title: '古慧晶',
    content: `
      <div class="text">
        <p><span>&nbsp;&nbsp; 17岁的职业高中二年级女生古慧晶突然火了。扎着丸子头，穿着灰色工装服，戴着白色手套在车间里摆弄扳手、拆卸轮胎——她的这一形象在网上广为流传，成了网友眼中又飒又美的“汽修班女孩”，并被称赞“用实力打破了性别和职业偏见”。</span></p><p><span>&nbsp;&nbsp; 古慧晶是深圳市第二职业技术学校2019级汽车运用与维修专业的一名学生。今年4月，古慧晶代表学校参加广东省职业院校学生专业技能大赛，在机电维修赛项目中获得一等奖。在这场比赛中，她不仅刷新了发动机拆装赛项目的全校记录，也成为广东省第一个参加此类赛事并夺得一等奖的女生。</span></p>
      </div>
    `,
  },
  {
    id: '2',
    image: slider2,
    title: '职业教育的“深圳模式”什么样',
    content: `
      <div  class="text ">
        <p><span>&nbsp;&nbsp; 在深圳，就有这样一个“男丁格尔”；多年前，他在嘲笑声中报读了护理专业，如今，他已经成长为副主任护师。他是出生、成长在深圳的“深二代”，毕业于深圳职业技术学院，他就是来自深圳市中医院的赵建深。</span></p><p><span>&nbsp;&nbsp; 在8·19中国医师节到来之际，一起来了解这位深圳男护士的故事。</span></p>
      </div>
    `,
  },
  {
    id: '3',
    image: slider3,
    title: '赵建深',
    content: `
      <div class="text ">
        <p><span>&nbsp;&nbsp; 在深圳，就有这样一个“男丁格尔”；多年前，他在嘲笑声中报读了护理专业，如今，他已经成长为副主任护师。他是出生、成长在深圳的“深二代”，毕业于深圳职业技术学院，他就是来自深圳市中医院的赵建深。</span></p><p><span>&nbsp;&nbsp; 在8·19中国医师节到来之际，一起来了解这位深圳男护士的故事。</span></p>
      </div>
    `,
  },
  {
    id: '4',
    image: slider4,
    title: '舒海峰',
    content: `
      <div class="text ">
        <p><span>&nbsp;&nbsp; 2020年4月，深圳市南山区为了树立榜样的力量，在本区152名优秀青年中选出了10名代表做风采展示，其中有医生、警察、企业家……16岁的舒海峰是唯一的学生，也是最年轻的一个。</span></p><p><span>&nbsp;&nbsp; 舒海峰，高功能自闭症，三级中度精神残疾，伴随着多重障碍，目前已举办过3场个人专场演奏会，参与几十场大型演出，受邀过央视春晚的录制，还拿过很多国际钢琴大赛金奖。</span></p>
      </div>
    `,
  },
  {
    id: '5',
    image: slider5,
    title: '冯子帆',
    content: `
      <div class="text ">
        <p><span>&nbsp;&nbsp; 2018年8月，练习帆船三年、年仅11岁的冯子帆在Topper帆船世界锦标赛中摘得4.2级别总冠军，成为中国该级别世界冠军第一人。一战成名后的冯子帆多次将国内外帆船赛奖杯收入囊中，2019年第十三届中国杯帆船赛，冯子帆搭档队友钟礼键夺得青少年组别RS-FEVA级季军，再一次在世界舞台上展现自己的实力。</span></p>
      </div>
    `,
  },
];

export default studentNews;
