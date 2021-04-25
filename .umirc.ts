/*
 * @Author: yuyang
 * @Date: 2021-03-27 13:53:04
 * @LastEditTime: 2021-04-24 11:36:39
 * @LastEditors: yuyang
 */
import { defineConfig } from 'umi';
import path from 'path';
import theme from './theme';

export default defineConfig({
  title: '学生职业发展平台',
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/Loading',
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  fastRefresh: {},
  theme,
});
