/*
 * @Author: yuyang
 * @Date: 2021-07-07 14:04:10
 * @LastEditTime: 2021-07-07 18:13:55
 * @LastEditors: yuyang
 */
import React from 'react';
import { connect } from 'umi';
import type { StudentModelType, StudentModelState, Loading } from 'umi';
import { Radio, Form } from 'antd';
import { DvaDispatch } from '@/typings';
import { QuestionType } from '../data';

interface ChoiceType {
  key: 'A' | 'B' | 'C';
  value: 'YES' | 'NO' | '不确定';
  score: 1 | 0 | -1;
}

const choiceMap = {
  YES: '是',
  NO: '否',
  不确定: '不确定',
};

function renderQuestionsList(questionList: QuestionType[]) {
  return questionList.map((item, index) => {
    const choices: ChoiceType[] = JSON.parse(item.choice);
    return (
      <Form.Item
        key={item.id}
        name={item.id.toString()}
        label={`${index + 1}、${item.title}`}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group name={item.id.toString()}>
          {
            choices.map((choice) => (
              <Radio key={choice.key} value={choice.key}>
                {choice.key}
                :
                {choiceMap[choice.value]}
              </Radio>
            ))
          }
        </Radio.Group>
      </Form.Item>
    );
  });
}

const Holland: React.FC<HollandProps> = (props) => {
  const { dispatch, questionList } = props;
  React.useEffect(() => {
    dispatch<{}>({
      type: 'studentModel/getHollandQuestions',
    });
  }, []);
  const [form] = Form.useForm();
  return (
    <div>
      <Form
        form={form}
      >
        {
          renderQuestionsList(questionList)
        }
      </Form>
    </div>
  );
};

const mapState2Props = ({ studentModel, loading }: { studentModel: StudentModelState, loading: Loading }) => {
  const { questionList } = studentModel;
  return {
    questionList,
    loading: loading.models.studentModel as boolean,
  };
};

interface HollandProps extends ReturnType<typeof mapState2Props> {
  dispatch: DvaDispatch<StudentModelType>;
}

export default connect(mapState2Props)(Holland);
