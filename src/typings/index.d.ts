/*
 * @Author: yuyang
 * @Date: 2021-06-07 15:30:26
 * @LastEditTime: 2021-07-07 16:16:10
 * @LastEditors: yuyang
 */
import type { Model } from 'dva';
import type { Dispatch } from 'umi';

export type DvaActionType<M extends Model = Model> = `${M['namespace']}/${(keyof M['effects'] | keyof M['reducers']) & string}`;

export interface DvaDispatch<M extends Model = Model> extends Dispatch {
  <P = any, R = undefined>(
    action: {
      type: DvaActionType<M>;
      payload?: P;
      callback?: (payload: P) => void;
      [key: string]: any;
    }
  ) : R extends undefined
    ? R
    : Promise<R>;
}
