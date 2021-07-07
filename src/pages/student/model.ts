/*
 * @Author: yuyang
 * @Date: 2021-07-07 15:47:29
 * @LastEditTime: 2021-07-07 17:05:37
 * @LastEditors: yuyang
 */
import type { Effect, Reducer } from 'umi';
import type { Model } from 'dva';
import type { QuestionType } from './data';
import service from './service';

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
  },
};

export default studentModel;
