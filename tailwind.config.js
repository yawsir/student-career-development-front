/*
 * @Author: yuyang
 * @Date: 2021-07-06 14:54:43
 * @LastEditTime: 2021-08-25 10:51:38
 * @LastEditors: yuyang
 */
module.exports = {
    purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#009999',
        'custom-gray': '#808080'
      })
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
