module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module'
  },
  'env': {
    'browser': true
  },
  'extends': 'standard',
  'plugins': [
    'html'
  ],
  'rules': {
    // 箭头函数用小括号括起来
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'comma-dangle': ['error', 'never'],
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    // 禁止非必要的括号
    'no-extra-parens': 2,
    // 禁止多余的冒号
    'no-extra-semi': 2,
    // 禁止重复的函数声明
    'no-func-assign': 2,
    // 禁止无效的正则表达式
    'no-invalid-regexp': 2,
    'eqeqeq': ['error', 'smart'],
    'strict': [2, 'function'],
    // 强制语句分号结尾
    'semi': [2, 'always'],
    // 不允许函数括号之间存在空格
    'space-before-function-paren': [0, 'always'],
    // 不允许未声明的变量
    'no-undef': 2,
    // 不能有声明后未被使用的变量或参数
    'no-unused-vars': [2, {'vars': 'all', 'args': 'after-used'}],
    // 未定义前不能使用
    'no-use-before-define': [2, 'nofunc'],
    // 强制驼峰法命名
    'camelcase': 2,
    'consistent-this': [0, 'self'],
    // 禁止重复声明变量
    'no-redeclare': 2,
    // 禁止在 return 语句中使用await
    'no-return-await': 0,
    // 'no-unused-expressions': 2,
    // 空行最多不能超过100行
    'no-multiple-empty-lines': [0, {'max': 100}],
    // 一行结束后面不要有空格
    'no-trailing-spaces': 2,
    'no-useless-escape': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
