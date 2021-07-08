/*
 * @Author: yuyang
 * @Date: 2021-07-07 15:47:35
 * @LastEditTime: 2021-07-08 16:54:44
 * @LastEditors: yuyang
 */
import { axiosGet, axiosPost } from '@/utils/axios';
import { QuestionType } from './data';

const getHollandQuestions = () => axiosGet<QuestionType>('/api/holland/questions');

export interface CreateHollandParams {
  answers: {
    id: string;
    k: string;
    s: number;
  }[];
  finished: boolean;
  nickname: string;
  username: string;
}

const createHolland = (p: CreateHollandParams) => axiosPost('/api/holland/create', p);

export default {
  getHollandQuestions,
  createHolland,
};
