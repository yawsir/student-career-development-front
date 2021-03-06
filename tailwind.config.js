/*
 * @Author: yuyang
 * @Date: 2021-07-06 14:54:43
 * @LastEditTime: 2021-10-19 17:06:04
 * @LastEditors: yuyang
 */
module.exports = {
    purge: {
      content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
      options: {
        safelist: [
          'table-odd-column',
          'table-even-column',
          'text-lg',
          'leading-loose',
          'bottom-full',
          '-bottom-full',
        ],
      }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#FEA554',
        'secondary': '#FCF16D',
        'third': '#F75F1D',
        'forth': 'rgba(254, 165, 83, 0.5)',
        'active': '#5685CB',
        'custom-gray': '#808080',
        'custom-gray-2': '#D7D7D7',
        'custom-gray-3': '#545454',
        'custom-gray-4': '#D6D6D6',
        'custom-gray-5': '#F2f2f2',
        'custom-white': '#E8F0F2',
        'custom-white2': '#E7F0F2',
        'custom-white3': '#ECF5F4',
        'custom-white4': '#EEF8FA',
        'table-odd-column': '#D5E3E8',
        'table-even-column': '#BDDFF1',
        'slide': '#E7F0F2',
        'teacherBg':'#fea552b0',
        'translucent-black': 'rgba(0, 0, 0, 0.2)',
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
        hs2: '0px 15px 20px rgb(0 0 0 / 35%)',
      },
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#000000',
        'secondary': '#898686',
        'third': '#8c8c8c',
        'title': '#302E72',
        'primary-theme': '#FEA554',
       }),
      borderColor: theme => ({
        ...theme('colors'),
        'primary': '#FEA554',
        'secondary': '#FCF16D',
        'third': '#10AEBF',
       }),
       extend: {
        keyframes: {
          'el-appear': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          'spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(-400deg)' },
          }
        },
        animation: {
          'appear': 'el-appear 1s cubic-bezier(0.19, 1, 0.22, 1);',
          'parent-rotate': 'spin 16s cubic-bezier(0.33, 1, 0.68, 1) infinite alternate'
         },
         colors: {
           'bg-1': '#FEA554',
           'bg-2': '#FCF16D',
         }
       }
    },
    variants: {
      extend: {
        padding: ['hover'],
        fontWeight: ['hover'],
      }
    },
    plugins: [],
};
