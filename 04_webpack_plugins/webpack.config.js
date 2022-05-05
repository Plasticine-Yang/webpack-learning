const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanPlugin } = require('webpack');
const { DefinePlugin } = require('webpack');

/**
 * @type { import('webpack').Configuration }
 */
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack plugin demo',
      template: './src/public/index.html',
    }),
    new DefinePlugin({
      // BASE_URL: JSON.stringify('/'),
      BASE_URL: '"/"',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new CleanPlugin(),
  ],
};
