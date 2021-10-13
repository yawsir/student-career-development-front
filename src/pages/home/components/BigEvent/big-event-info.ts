/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-08-31 17:50:14
 * @LastEditTime: 2021-10-09 19:09:15
 * @LastEditors: yuyang
 */
import BigeventImage1 from '@/assets/bigevents/bigevent1.png';
import BigeventImage2 from '@/assets/bigevents/bigevent2.png';
import BigeventImage3 from '@/assets/bigevents/bigevent3.png';
import BigeventImage4 from '@/assets/bigevents/bigevent4.png';
import BigeventImage5 from '@/assets/bigevents/bigevent5.png';
import BigeventImage6 from '@/assets/bigevents/bigevent6.png';

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
    date: '2021-10-10',
    image: BigeventImage1,
    title: '纪念辛亥革命110周年大会在京隆重举行 习近平发表重要讲话',
    content: `
        <div>
          <p style="text-align:center;line-height:20px;"><span style="font-family:'华文新魏', sans-serif;font-weight:400;color:#7B0C00;">纪念辛亥革命110周年大会在京隆重举行</span></p><p style="text-align:center;line-height:20px;"><span style="font-family:'华文新魏', sans-serif;font-weight:400;color:#7B0C00;">习近平发表重要讲话</span></p><p style="text-align:center;line-height:20px;"><span style="font-family:'华文新魏', sans-serif;font-weight:400;color:#7B0C00;">李克强栗战书王沪宁赵乐际韩正王岐山出席 汪洋主持</span></p><p style="text-align:center;line-height:25px;"><span style="font-family:'微软雅黑', sans-serif;font-weight:400;color:#7B0C00;"><br></span></p><p style="text-align:justify;text-justify:inter-word;line-height:25px;"><span style="font-family:'微软雅黑', sans-serif;font-weight:400;color:#000000;">&nbsp;&nbsp; 纪念辛亥革命110周年大会9日上午在北京人民大会堂隆重举行。中共中央总书记、国家主席、中央军委主席习近平在会上发表重要讲话强调，今年是辛亥革命110周年，是中国共产党成立100周年，中国人民正意气风发向着全面建成社会主义现代化强国的第二个百年奋斗目标迈进。</span></p>
        </div>
    `,
  },
  {
    id: 2,
    date: '2021-10-30',
    image: BigeventImage2,
    title: '习近平等党和国家领导人出席烈士纪念日向人民英雄敬献花篮仪式',
    content: `<div><p style="text-align:center;line-height:20px;"><span style="font-family:'华文新魏', sans-serif;font-weight:400;color:#7B0C00;">百年征程波澜壮阔 英雄浩气万古长存</span></p><p style="text-align:center;line-height:20px;"><span style="font-family:'华文新魏', sans-serif;font-weight:400;color:#7B0C00;">烈士纪念日向人民英雄敬献花篮仪式在京隆重举行</span></p><p style="text-align:justify;text-justify:inter-word;line-height:20px;"><span style="font-family:'华文新魏', sans-serif;font-weight:400;color:#7B0C00;">习近平李克强栗战书汪洋王沪宁赵乐际韩正王岐山出席</span><span style="font-family:'微软雅黑', sans-serif;font-weight:400;color:#7B0C00;"><br></span><span style="font-family:'微软雅黑', sans-serif;font-weight:400;">&nbsp; &nbsp; </span></p><p style="text-align:justify;text-justify:inter-word;line-height:25px;"><span style="font-family:'微软雅黑', sans-serif;font-weight:400;">&nbsp;&nbsp; &nbsp; 烈士纪念日向人</span><span style="font-family:'微软雅黑', sans-serif;font-weight:400;color:#000000;">民英雄敬献花篮仪式30日上午在北京天安门广场隆重举行。党和国家领导人习近平、李克强、栗战书、汪洋、王沪宁、赵乐际、韩正、王岐山等，同各界代表一起出席仪式。</span></p></div>
    `,
  },
  {
    id: 3,
    date: '2021-09-14',
    image: BigeventImage3,
    title: '新校园，新起点，新学院！深圳高校开学“上新”',
    content: `
      <div id="u98_text" class="text ">
        <p><span>&nbsp;&nbsp; 前不久，深圳大学丽湖校区二期工程正式启用，两山一河的生态景观让人心旷神怡。据悉，深大丽湖校区二期包含中央图书馆、公共教学、学生宿舍与食堂共16栋建筑。二期工程落成后，今年迎来了首批4000余名新生（其中本科新生2644人）。数千新生入住，加上深大经、管、法3个学院从粤海校区迁至丽湖校区，目前深圳大学丽湖校区在校学生已突破万名。</span></p>
      </div>
    `,
  },
  {
    id: 4,
    date: '2021-09-24',
    image: BigeventImage4,
    title: '东北师范大学附属中学深圳学校首届开学典礼成功举行',
    content: `
      <div id="u104_text" class="text ">
        <p><span>&nbsp;&nbsp; 2021年9月24日上午，“七秩风华传伟业，百年名校写新章”——东北师范大学附属中学深圳学校2021—2022学年第一学期首届开学典礼在学校报告厅隆重举行。东北师范大学党委常委、副校长徐海阳，东北师范大学附属中学党委书记刘丽君，坪山区副区长吴志柳，坪山区政协副主席、区教育局局长彭尧，深圳市教育局基础教育处负责人夏育华出席典礼。</span></p>
      </div>
    `,
  },
  {
    id: 5,
    date: '2021-09-26',
    image: BigeventImage5,
    title: '合力育人开新篇——深圳市中小学心理健康教育工作会议顺利召开',
    content: `
      <div id="u110_text" class="text ">
        <p><span>&nbsp;&nbsp; 9月22日，由深圳市教育局组织举办的全市中小学心理健康教育工作会议在市民中心召开。会议由市教育局德体卫艺处冯妍妍处长主持，市教育局党组成员、副局长邱成瑜同志出席会议并做讲话，市、区市教科院及各区教育行政部门等相关负责人约60人参加了会议。</span></p>
      </div>
    `,
  },
  {
    id: 6,
    date: '2021-09-29',
    image: BigeventImage6,
    title: '深圳市第二实验学校五名学子夺下两枚金牌',
    content: `
      <div id="u116_text" class="text ">
        <p><span>&nbsp;&nbsp; 9月27日，中华人民共和国第十四届运动会（以下简称“全运会”）落下帷幕。此前，全运会群众比赛毽球项目在湖北举行，这个首次被列入比赛的项目共决出6块金牌，广东省获得5金1银。</span></p>
      </div>
    `,
  },
];

export default BigEventInfos;
