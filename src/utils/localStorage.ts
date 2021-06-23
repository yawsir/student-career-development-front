/*
 * @Author: yuyang
 * @Date: 2021-04-28 11:48:18
 * @LastEditTime: 2021-06-23 14:14:54
 * @LastEditors: yuyang
 */

interface V {
  [k: string]: any;
}

export const storageKeys = {
  TOKEN_KEY_NAME: 'FECBB6E8B4699053',
  IS_LOGED_KEY_NAME: '0802609C14BE1D7B',
  USERNAME_KEY_NAME: '824EC59323936251',
};

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
