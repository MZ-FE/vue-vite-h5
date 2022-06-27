/**
 * @description: css校验配置
 */
module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  overrides: [
    {
      files: ['**/*.{html,vue}'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': null,
    'declaration-block-semicolon-space-before': 'never',
    'media-feature-name-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    // style calc中使用v-bind
    'function-calc-no-unspaced-operator': null,
    // 覆盖stylelint-config-standard的配置 null为禁用规则
    'function-url-quotes': null, // 设置url(路径可不加引号)
    'selector-class-pattern': null, // 设置类名选择器不遵循 kebab-case
    'no-descending-specificity': null, //设置允许低优先级的选择器出现在高优先级的选择器之后
    'no-empty-source': null, // 允许文件内容为空
    'font-family-no-missing-generic-family-keyword': null, // 设置允许定义非"generic-family"风格字体
    indentation: 2, // 设置缩进为4个空格
  },
};
