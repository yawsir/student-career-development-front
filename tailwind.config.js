/*
 * @Author: yuyang
 * @Date: 2021-07-06 14:54:43
 * @LastEditTime: 2021-08-27 18:50:20
 * @LastEditors: yuyang
 */
module.exports = {
    purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#009999',
        'custom-gray': '#808080',
        'custom-gray-2': '#D7D7D7',
        'custom-gray-3': '#545454',
        'custom-white': '#E8F0F2',
        'custom-white2': '#E7F0F2',
      })
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
