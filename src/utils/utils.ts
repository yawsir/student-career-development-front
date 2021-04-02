/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:48:53
 * @LastEditTime: 2021-04-02 15:22:02
 * @LastEditors: yuyang
 */
/**
 * menu Highlight key
 * @param pathname string
 */
const queryKeysByPath = (pathname: string): { openKey: string; selectKey: string } => {
  const reg = /(^\/*)|(\/*$)/g; // 匹配字符串首尾斜杠
  const path = pathname.replace(reg, '');
  console.log(path);
  const routes = path.split('/');
  console.log(routes);
  return { openKey: routes[0], selectKey: routes[1] || routes[0] };
};

const BASE = 1920;
export function adaptRem() {
  const dpr = window.devicePixelRatio;
  const meta = document.querySelector('meta[name=viewport]');
  meta?.setAttribute('content', `width=device-width,inital-scale=${1 / dpr},user-scalable=no`);
  // document.documentElement.style.fontSize = window.innerWidth / 1080 * 100 + 'px'
  document.documentElement.style.fontSize = `${(window.innerWidth / BASE) * 100}px`;
}

export default queryKeysByPath;
