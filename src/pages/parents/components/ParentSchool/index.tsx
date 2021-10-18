/*
 * @Author: yuyang
 * @Date: 2021-10-18 16:30:21
 * @LastEditTime: 2021-10-18 17:04:25
 * @LastEditors: yuyang
 */
import React from 'react';
import List from '../List';

interface ParentSchoolProps {

}
const ParentSchool: React.FC<ParentSchoolProps> = () => (
  <div className="w-full text-4xl py-2 my-4">
    <div className="w-3/4 mx-auto h-1 bg-gradient-to-r from-bg-1 to-bg-2" />
    <div className="w-3/4 mx-auto px-16 py-8">
      <div className="w-full pb-16">
        <h3 className="text-2xl text-center pt-4 pb-2 font-bold">生涯规划的重要性</h3>
        <div className="flex justify-start items-center">
          <div className="w-40 font-bold text-center bg-primary text-2xl rounded-lg mx-4 px-2 py-2 text-title">前言</div>
          <div className="w-full">
            <List>
              <List.Item>生涯规划是一个持续和终身的过程，以达致人生不同阶段的目标。在求学阶段，生涯规划教育在培养学生认识自我、个人规划、设立目标和反思的能力，以及认识衔接各升学就业途径方面，扮演一个重要角色。</List.Item>
              <List.Item>身为父母的你，该如何帮助子女制定升学就业计划？</List.Item>
              <List.Item>订立清晰的目标能够使子女有明确的方向，并透过持续的学习、评估和检讨，向目标进发。子女在过程中因而产生热情和动力，取得成就和满足感。生涯规划教育能够让子女在不同成长阶段中认识自己的志向、兴趣和能力，培养他们的自信及自我规划的能力，并掌握未来升学就业道路的发展。</List.Item>
              <List.Item>家长在子女的生涯规划教育中亦扮演一个很重要的角色。家长透过了解子女性格特征和能力、发掘他们的潜能、传递正确的价值观念，从而协助子女规划和制定不同阶段的目标，以实现他们的理想。</List.Item>
            </List>
          </div>
        </div>
      </div>

      <div className="w-full pb-16">
        <h3 className="text-2xl text-center pt-4 pb-2 font-bold">生涯规划重点过程</h3>
        <div className="flex justify-start items-center">
          <div className="w-40 font-bold text-center bg-primary text-2xl rounded-lg mx-4 px-2 py-2 text-title">重点过程</div>
          <div className="w-full">
            <List>
              <List.Item>在子女的生涯规划教育中，作为家长该如何帮助他们在不同阶段规划目标?</List.Item>
              <List.Item>家长在子女的生涯规划中担任极为重要的角色。家长可根据以下五个步骤，协助子女制定他们的升学就业计划以实现他们的理想及目标。</List.Item>
              <List.Item>制定和实现目标是一个循环的过程，其间不段探索、尝试和检讨，从而制定未来的发展蓝图，以下是重点规划过程：</List.Item>
              <List.SubItem title="了解自我">多与子女沟通，帮助他们了解和发展自己的兴趣、能力和志向，亦可与老师多沟通以了解子女的优点和弱点。同时给子女足够的空间让他们能独立思考，协助他们更加了解自我。</List.SubItem>
              <List.SubItem title="寻找探索">主动提出与子女共同寻找和探索各类资料，并提供适当的意见及协助他们。</List.SubItem>
              <List.SubItem title="整合评估">陪同子女整合各类资料，衡量相关因素，例如时间、能力、人物、事情的限制，然后引导他们收窄范围和作出评估。</List.SubItem>
              <List.SubItem title="制定计划">经评估后，协助子女拟定相关计划，订立短期目标和方向。</List.SubItem>
              <List.SubItem title="实践计划">支持和鼓励子女努力尝试，逐步实践目标和计划</List.SubItem>
              <List.SubItem title="检讨反思">协助子女实践目标的过程中，不断检讨和反思，思考是否与当初订立的计划一致，从而检讨和改善计划，努力向目标前进。</List.SubItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ParentSchool;
