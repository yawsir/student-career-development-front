/*
 * @Author: yuyang
 * @Date: 2021-07-06 14:54:43
 * @LastEditTime: 2021-09-12 15:58:27
 * @LastEditors: yuyang
 */
module.exports = {
    purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#009999',
        'secondary': '#0DAFC0',
        'third': '#10AEBF',
        'custom-gray': '#808080',
        'custom-gray-2': '#D7D7D7',
        'custom-gray-3': '#545454',
        'custom-gray-4': '#D6D6D6',
        'custom-gray-5': '#F2f2f2',
        'custom-white': '#E8F0F2',
        'custom-white2': '#E7F0F2',
      }),
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
        hs: '8px 10px 25px rgb(0 0 0 / 35%)',
      },
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#009999',
       }),
      borderColor: theme => ({
        ...theme('colors'),
        'primary': '#009999',
        'secondary': '#0DAFC0',
        'third': '#10AEBF',
       })
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
