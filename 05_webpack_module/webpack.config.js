const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanPlugin } = require('webpack');

/**
 * @type { import('webpack').Configuration }
 */
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin(), new CleanPlugin()],
};
