const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanPlugin } = require('webpack');

/**
 * @type { import('webpack').Configuration }
 */
module.exports = {
  mode: 'development',
  devtool: 'nosources-source-map',
  plugins: [new HtmlWebpackPlugin(), new CleanPlugin()],
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
};
