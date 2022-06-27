module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 需要转换的单位
      viewportWidth: 375, // 视口宽度，等同于设计稿宽度
      unitPrecision: 5, // 精确到小数点后几位
      /**
       * 将会被转换的css属性列表，
       * 设置为 * 表示全部，如：['*']
       * 在属性的前面或后面设置*，如：['*position*']，*position* 表示所有包含 position 的属性，如 background-position-y
       * 设置为 !xx 表示不匹配xx的那些属性，如：['!letter-spacing'] 表示除了letter-spacing 属性之外的其他属性
       * 还可以同时使用 ! 和 * ，如['!font*'] 表示除了font-size、 font-weight ...这些之外属性之外的其他属性名头部是‘font’的属性
       * */
      propList: ['*'],
      viewportUnit: 'vw', // 需要转换成为的单位
      fontViewportUnit: 'vw', // 需要转换称为的字体单位
      /**
       * 需要忽略的选择器，即这些选择器对应的属性值不做单位转换
       * 设置为字符串，转换器在做转换时会忽略那些选择器中包含该字符串的选择器，如：['body']会匹配到 .body-class，也就意味着.body-class对应的样式设置不会被转换
       * 设置为正则表达式，在做转换前会先校验选择器是否匹配该正则，如果匹配，则不进行转换，如[/^body$/]会匹配到 body 但是不会匹配到 .body
       */
      selectorBlackList: [],
      minPixelValue: 1, // 最小的像素单位值
      mediaQuery: false, // 是否转换媒体查询中设置的属性值
      replace: true, // 替换包含vw的规则，而不是添加回退
      /**
       * 忽略一些文件，如'node_modules'
       * 设置为正则表达式，将会忽略匹配该正则的所有文件
       * 如果设置为数组，那么该数组内的元素都必须是正则表达式
       */
      exclude: [],
      landscape: false, // 是否自动加入 @media (orientation: landscape)，其中的属性值是通过横屏宽度来转换的
      landscapeUnit: 'vw', // 横屏单位
      landscapeWidth: 1334, // 横屏宽度
    },
  },
};
