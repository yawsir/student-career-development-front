/*
 * @Author: yuyang
 * @Date: 2021-03-27 13:53:04
 * @LastEditTime: 2021-03-27 14:09:36
 * @LastEditors: yuyang
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}

declare interface PromiseConstructor {
  myAll(promises: Array<Promise<any>>, count?: number): Promise<Array<any>>;
}
