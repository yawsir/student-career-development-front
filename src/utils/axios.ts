import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { notification, message } from 'antd';
import storage from '@/utils/localStorage';
import getErrorMessage from '@/utils/get-error-message';

interface ErrorType {
  code?: number;
  description?: string;
  error?: string;
}

// 右上角的接口调用错误通知，默认仅在本地开发模式开启;可以在发起请求时，给isAvoidShowError传true以手动开启。
const IS_AVOID_SHOW_ERROR_DEFAULT: boolean = process.env.NODE_ENV !== 'development';

// axios基本配置
const baseConfig = {
  withCredentials: true, // 允许跨域
  timeout: 10000, // 超时设置
  retry: 1, // 超时重新发请求的次数
  retryDelay: 2000, // 超时后再次发请求的间隔时间
  retryCount: 0,
};

/**
 * axios超时判断
 */
const isTimeoutError = (err: AxiosError<ErrorType>) => err.message.includes('timeout');

const devModeErrorHandler = (err: AxiosError<ErrorType>, url: string) => {
  if (axios.isCancel(err)) {
    notification.info({
      duration: 3,
      message: `${url},请求已经取消`,
      description: err.message,
      style: {
        position: 'fixed',
        top: '64px',
        right: 0,
      },
    });
  } else {
    const code = err.response?.data.code;
    const description = err.response?.data.description;
    notification.error({
      duration: 8,
      message: `${url},请求出错`,
      description: `code: ${code};description: ${description}`, // 超时信息会在err.message
      style: {
        position: 'fixed',
        top: '64px',
        right: 0,
      },
    });
  }
};

/**
 * axios非超时,错误处理
 * 将err.response以正常数据返回
 */
const commonErrorHandler = (err: AxiosError<ErrorType>, url: string, isAvoidShowError: boolean = IS_AVOID_SHOW_ERROR_DEFAULT) => {
  const errCode = err.response?.data.code;
  if (errCode) {
    message.error(getErrorMessage(errCode)); // 统一错误提示
  }
  if (!isAvoidShowError) {
    devModeErrorHandler(err, url);
  }
  return err.response;
};

/**
 * 统一错误处理
 * @param  {AxiosError} err
 * @description: 和后端统一返回数据类型
 */
const errorHandler = (err: AxiosError, isAvoidShowError?: boolean, url?: any): any => {
  if (isTimeoutError(err)) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return timeoutHandle(err, url);
  }
  return commonErrorHandler(err, url, isAvoidShowError);
};

/**
 * axios超时,错误处理
 */
const timeoutHandle = async (err: AxiosError, url: any) => {
  const { config }: any = err;

  config.retryCount = config.retryCount || 0;
  if (config.retryCount > baseConfig.retry) {
    commonErrorHandler(err, url);
    config.retryCount = 0;
    return Promise.resolve({ data: '' });
  }
  config.retryCount += 1;
  return axios(config).catch(errorHandler(err, url));
};

const cancelQueue: Array<Function> = [];

const cancel = (text?: any) => {
  if (!cancelQueue.length) return;
  for (let i = 0; i < cancelQueue.length; i++) {
    cancelQueue[i](text);
  }
};

const request = async ({ isAvoidShowError, ...option }: AxiosRequestConfig & { isAvoidShowError?: boolean }): Promise<any> => {
  const cancelToken = new axios.CancelToken((c: Function) => {
    cancelQueue.push(c);
  });
  const { data } = await axios({ ...baseConfig, ...option, cancelToken }).catch((err) => errorHandler(err, isAvoidShowError, option!.url));
  return data;
};

/**
 * get请求
 * @param  {string} url: 请求路径
 * @param  {object} params ： 请求参数~
 * @param  {object} options : 自定义配置
 */
const axiosGet = async <T = any>(
  url: string,
  params?: object,
  options?: AxiosRequestConfig,
  isAvoidShowError?: boolean,
): Promise<T & ErrorType> =>
  request({
    url,
    isAvoidShowError,
    params,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: storage.getItem('token'),
    },
    ...options,
  });

/**
 * post请求
 * @param  {string} url: 请求路径
 * @param  {object} data ： 请求参数
 * @param  {object} options : 自定义配置
 * @param {boolean} isAvoidShowError: 是否通知错误信息
 * @description post数据为application/json，一般用于新增,建议都用JSON传数据，可以比较方便的表示更为复杂的结构（有嵌套对象）
 */
const axiosPost = async <T = any>(
  url: string,
  data: object,
  options?: AxiosRequestConfig,
  isAvoidShowError?: boolean,
): Promise<T & ErrorType> =>
  request({
    url,
    isAvoidShowError,
    data,
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: storage.getItem('token'),
    },
    ...options,
  });

/**
 * put请求
 * @param  {string} url: 请求路径
 * @param  {object} data ： 请求参数
 * @param  {object} options : 自定义配置
 * @description:用于更新数据，需要提交整个对象。
 */
const axiosPut = async <T = any>(url: string, data: object, options?: AxiosRequestConfig): Promise<T & ErrorType> =>
  request({
    url,
    data,
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: storage.getItem('token'),
    },
    ...options,
  });

/**
 * delete请求
 * @param  {string} url: 请求路径
 * @param  {object} data ： 请求参数
 * @param  {object} options : 自定义配置
 * @description:用于删除数据
 */
const axiosDelete = async <T = any>(url: string, data: object, options?: AxiosRequestConfig): Promise<T & ErrorType> =>
  request({
    url,
    data,
    method: 'delete',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: storage.getItem('token'),
    },
    ...options,
  });

const axiosAll = async (fetch: Promise<any>[], completeNumber?: number): Promise<any> => {
  const data = await Promise.myAll(fetch, completeNumber).catch(errorHandler);
  return data;
};

Promise.myAll = (promiseArr: Promise<any>[], number?: number) =>
  // 为了让传入的值不是promise也返回promise
  new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      throw new Error('promiseArr必须为数组');
    }
    const resArr: Array<Function> = [];
    const len = promiseArr.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
      // Promise.resolve将数组中非promise转为promise
      Promise.resolve(promiseArr[i])
        // eslint-disable-next-line no-loop-func
        .then((value) => {
          count++;
          if (value) resArr[i] = value;
          if (count === number) {
            cancel();
            return resolve(resArr);
          }
          resolve(resArr);
        })
        .catch((err) => reject(err));
    }
  });
export { axiosGet, axiosPost, axiosPut, axiosDelete, axiosAll, errorHandler, cancel };
