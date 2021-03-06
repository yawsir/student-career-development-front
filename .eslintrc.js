/*
 * @Author: yuyang
 * @Date: 2021-02-03 10:09:10
 * @LastEditTime: 2021-05-04 16:31:58
 * @LastEditors: yuyang
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-shadow': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': [
      'off',
      {
        allowSingleExtends: false,
      },
    ],
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ], // 引入文件扩展
    'no-plusplus': ['off'], // 允许使用++运算符
    'class-methods-use-this': ['off'], // 在class中，不必将没有使用this的方法转换成静态方法
    'func-names': ['off'], // 允许匿名函数
    'object-curly-newline': ['off'],
    'react/jsx-indent': ['error', 2], // 统一jsx标签的缩进
    'react/jsx-indent-props': ['error', 2], // 统一jsx属性的缩进
    'react/jsx-props-no-spreading': ['off'], // 不禁止jsx上使用解构
    'react/static-property-placement': ['error', 'static public field'], // 统一静态属性的位置
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }], // 使用解构语法， 类的属性除外
    'react/state-in-constructor': ['off'], // state不需要放到constructor
    'jsx-a11y/click-events-have-key-events': ['off'], // 取消点击事件必须加key事件
    'jsx-a11y/no-noninteractive-element-interactions': ['off'], // 取消非互动元素必须添加role属性
    'jsx-a11y/no-static-element-interactions': ['off'], // 取消必须添加role
    'jsx-a11y/label-has-associated-control': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    camelcase: ['off'],
    'react/jsx-no-bind': ['off'],
    'no-unused-expressions': ['off'],
    'consistent-return': ['off'],
    'react/jsx-boolean-value': ['off'],
    'react/prop-types': ['off'],
    'no-use-before-define': ['off', { functions: false, classes: false, variables: false }],
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/require-default-props': ['off'],
    'max-len': ['error', { code: 200 }],
    'implicit-arrow-linebreak': ['off'],
    'import/prefer-default-export': ['off'],
    "import/extensions": ['error', "never", {
      "png": "always",
      "jpg": "always",
      "svg": "always",
    }]
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: {} },
  },
  globals: {
    Global: 'readonly',
  },
};
