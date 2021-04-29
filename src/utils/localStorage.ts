/*
 * @Author: yuyang
 * @Date: 2021-04-28 11:48:18
 * @LastEditTime: 2021-04-29 22:18:47
 * @LastEditors: yuyang
 */

interface V {
  [k: string]: any;
}

export default {
  getItem(key: string) {
    return localStorage.getItem(key);
  },

  getItems(keys: string[]) {
    const res: V = {};
    keys.forEach((key) => {
      res[key] = localStorage.getItem(key);
    });
    return res;
  },

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  },

  setItems(kvmap: V) {
    type Key = keyof V;
    const keys: Key[] = Object.keys(kvmap);
    keys.forEach((key) => {
      localStorage.setItem(key.toString(), kvmap[key]);
    });
  },

  removeItem(key: string) {
    localStorage.removeItem(key);
  },

  removeItems(keys: string[]) {
    keys.forEach((key) => {
      localStorage.removeItem(key);
    });
  },
};
