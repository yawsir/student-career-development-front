/*
 * @Author: yuyang
 * @Date: 2021-04-28 17:31:31
 * @LastEditTime: 2021-04-28 17:38:23
 * @LastEditors: yuyang
 */
const errMsgs: {
  [code: number]: string;
} = {
  1001: '登录失效',
  1013: '未查询到该用户',
  10005: '找不到账期信息',
};

function getErrorMessage(code: number): string {
  return errMsgs[code] || '未知错误';
}

export default getErrorMessage;
