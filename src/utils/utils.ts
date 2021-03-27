/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:48:53
 * @LastEditTime: 2021-03-27 14:48:56
 * @LastEditors: yuyang
 */
/**
 * menu Highlight key
 * @param pathname string
 */
const queryKeysByPath = (pathname: string): { openKey: string; selectKey: string } => {
  const reg = /(^\/*)|(\/*$)/g; // 匹配字符串首尾斜杠
  const path = pathname.replace(reg, '');
  const routes = path.split('/');
  return { openKey: routes[0], selectKey: routes[1] || routes[0] };
};
export default queryKeysByPath;
