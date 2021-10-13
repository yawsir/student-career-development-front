/*
 * @Author: yuyang
 * @Date: 2021-10-13 16:21:42
 * @LastEditTime: 2021-10-13 17:43:20
 * @LastEditors: yuyang
 */
import React from 'react';
import Structure from './Structure';

interface PlatformBigeventProps {

}
const PlatformBigevent: React.FC<PlatformBigeventProps> = () => {
  React.useEffect(() => {}, []);
  return (
    <div className="w-full">
      <div className="flex justify-center items-center text-center mb-8">
        <span className="text-2xl px-16 py-4 rounded-md font-bold transition transform scale-100 hover:scale-110 bg-gradient-to-r from-bg-1 to-bg-2">
          平台大事件
        </span>
      </div>
      <div className="mx-auto box-border relative">
        <div className="w-11/12 mx-auto flex z-10 justify-center relative">
          <Structure color="red" text="2020年，由教科院学生生涯发展办公室牵头，组织行业内、教育局专家，对学生生涯发展平台的发展方向、功能、内容等进行定位" />
          <Structure color="blue" text="2021年1月，深圳市学生生涯发展支持平台建设项目正式启动，在完成一系列招标、公示等商务流程后，项目进入建设阶段" />
          <Structure color="green" text="2021年5月 针对平台建设进展，面向院领导阶段性汇报，听取领导意见，进行平台内容调整" />
          <Structure color="purple" text="2021年7月 面向全市11个区，搜集并统计共计1W余份有效问卷，并输出正式的调研分析报告，本次调研覆盖范围和问卷搜集数量，已创教科院历史之最" />
          <Structure color="pink" text="2021年11月 学生社会实践活动正式进入实际操作阶段，以教科院名义，平台与深圳市众多实力企业进行广泛接触，实现企业社会责任承担和学生社会实践的共同发展" />
        </div>
        <div className="w-11/12 z-0 rounded-3xl h-8 bg-gradient-to-r from-bg-1 to-bg-2 absolute left-1/2 transform -translate-x-1/2" style={{ top: 216 }} />
      </div>
    </div>
  );
};

export default PlatformBigevent;
