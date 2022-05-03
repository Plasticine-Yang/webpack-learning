const path = require('path');

/**
 * @type { import('webpack').Configuration }
 */
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // 也可以直接用 test 简写
        // resource: {
        //   test: /\.css/,
        // },
        test: /\.css/,
        // rules.use 中的 loader 还可以直接简写为 rules.loader
        // use: [
        //   // 需要给 loader 提供配置项的时候使用对象形式
        //   // 不需要提供配置时直接用字符串即可
        //   // 即 use: ['css-loader']
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       xxx: 'options item',
        //     },
        //   },
        // ],
        // 一定要将 style-loader 写在 css-loader 前面，因为 webpack 是逆序使用 loader 的
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
