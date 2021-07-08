/*
 * @Author: yuyang
 * @Date: 2021-07-07 14:04:10
 * @LastEditTime: 2021-07-08 16:55:19
 * @LastEditors: yuyang
 */
import React from 'react';
import { connect } from 'umi';
import type { StudentModelType, StudentModelState, Loading } from 'umi';
import { Radio, Form, Button, Progress, RadioChangeEvent } from 'antd';
import { DvaDispatch } from '@/typings';
import { QuestionType } from '../data';

export interface FormValue {
  [id: string]: string | undefined;
}

export interface ChoiceType {
  key: 'A' | 'B' | 'C';
  value: 'YES' | 'NO' | '不确定';
  score: 1 | 0 | -1;
}

const choiceMap = {
  YES: '是',
  NO: '否',
  不确定: '不确定',
};

interface QuestionListProps {
  questionList: QuestionType[];
  onChange?: (e: RadioChangeEvent) => void;
}

const QuestionsList: React.FC<QuestionListProps> = (props) => {
  const { questionList, onChange } = props;
  return (
    <>
      {
        questionList.map((item, index) => {
          const choices: ChoiceType[] = JSON.parse(item.choice);
          return (
            <div className="p-2 my-2 transition-all bg-gray-100 hover:bg-gray-200 rounded-md" key={item.id}>
              <Form.Item
                name={item.id.toString()}
                label={(
                  <span className="text-lg">
                    {index + 1}
                    、
                    {item.title}
                  </span>
                )}
                rules={[
                  {
                    required: true,
                    message: '此题还没有作答哦',
                  },
                ]}
              >
                <Radio.Group onChange={onChange} name={item.id.toString()}>
                  {
                    choices.map((choice) => (
                      <Radio key={choice.key} value={JSON.stringify({ key: choice.key, score: choice.score })}>
                        <span className="text-base">
                          {choice.key}
                          :
                        </span>
                        <span className="font-bold text-base mr-2">
                          {choiceMap[choice.value]}
                        </span>
                      </Radio>
                    ))
                  }
                </Radio.Group>
              </Form.Item>
            </div>
          );
        })
      }
    </>
  );
};

const Holland: React.FC<HollandProps> = (props) => {
  const { dispatch, questionList } = props;
  React.useEffect(() => {
    dispatch<{}>({
      type: 'studentModel/getHollandQuestions',
    });
  }, []);

  const totalCount = questionList.length;

  const [percent, setPercent] = React.useState(0);
  const [selectedQuestions, setSelectedQuestions] = React.useState<string[]>([]);

  const [form] = Form.useForm();

  const handleFinish = (value: FormValue) => {
    dispatch<FormValue>({
      type: 'studentModel/createHolland',
      payload: value,
    });
  };

  const handleChange = (e: RadioChangeEvent) => {
    const selectName = e.target.name;
    if (selectName && !selectedQuestions.includes(selectName)) {
      const newSelected = [...selectedQuestions, selectName];
      setSelectedQuestions(newSelected);
      setPercent(Math.floor((newSelected.length / totalCount) * 100));
    }
  };

  const handleSubmit = () => form.submit();

  return (
    <div className="container mx-auto">
      <div className="w-full sticky top-0 bg-white z-10">
        <h5 className="text-center pt-6 text-xl font-bold">
          亲爱的同学，这里是霍兰德测评的题目，请根据自身情况进行作答，大约需15min的时间。
        </h5>
        <div className="w-full px-6 box-border pb-4 flex items-center">
          <Progress type="line" percent={percent} />
          <Button
            type="primary"
            shape="circle"
            onClick={handleSubmit}
            style={{
              width: '4rem',
              height: '4rem',
              backgroundColor: 'rgba(16, 185, 129)',
              borderColor: 'rgba(16, 185, 129)',
              marginLeft: '1rem',
            }}
          >
            交卷
          </Button>
        </div>
      </div>
      <Form
        form={form}
        onFinish={handleFinish}
        layout="vertical"
      >
        <QuestionsList questionList={questionList} onChange={handleChange} />
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
