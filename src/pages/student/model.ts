/*
 * @Author: yuyang
 * @Date: 2021-07-07 15:47:29
 * @LastEditTime: 2021-07-08 16:59:06
 * @LastEditors: yuyang
 */
import type { Effect, Reducer } from 'umi';
import { history } from 'umi';
import type { Model } from 'dva';
import { message } from 'antd';
import storage, { storageKeys } from '@/utils/localStorage';
import type { QuestionType } from './data';
import service, { CreateHollandParams } from './service';
import type { ChoiceType as HollandChoiceType } from './holland';

export interface StudentModelState {
  questionList: QuestionType[];
}

export interface StudentModelType extends Model {
  namespace: 'studentModel';
  state: StudentModelState;
  reducers: {
    save: Reducer<StudentModelState>
  }
  effects: {
    getHollandQuestions: Effect;
    createHolland: Effect;
  };
}

const studentModel: StudentModelType = {
  namespace: 'studentModel',
  state: {
    questionList: [],
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    * getHollandQuestions(_, { put }) {
      try {
        const data: QuestionType[] = yield service.getHollandQuestions();
        yield put({
          type: 'save',
          payload: {
            questionList: data,
          },
        });
      } catch (error) {
        console.dir(error);
      }
    },
    * createHolland({ payload }) {
      try {
        const ids = Object.keys(payload);
        const params: CreateHollandParams = {
          answers: [],
          finished: true,
          nickname: storage.getItem(storageKeys.USERNAME_KEY_NAME) || '',
          username: storage.getItem(storageKeys.USERNAME_KEY_NAME) || '',
        };
        ids.forEach((id) => {
          const choiceJson = payload[id];
          if (choiceJson) {
            const choice = JSON.parse(choiceJson) as HollandChoiceType;
            params.answers.push({
              id,
              k: choice.key,
              s: choice.score,
            });
          }
        });
        yield service.createHolland(params);
        message.success('恭喜，完成测评啦');
        history.push('/student');
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default studentModel;
