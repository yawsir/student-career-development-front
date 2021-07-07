/*
 * @Author: yuyang
 * @Date: 2021-07-07 15:47:35
 * @LastEditTime: 2021-07-07 16:41:36
 * @LastEditors: yuyang
 */
import { axiosGet } from '@/utils/axios';
import { QuestionType } from './data';

const getHollandQuestions = () => axiosGet<QuestionType>('/api/holland/questions');

export default {
  getHollandQuestions,
};
