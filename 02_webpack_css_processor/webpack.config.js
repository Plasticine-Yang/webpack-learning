/**
 * @type { import('webpack').Configuration }
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            // options: {
            //   postcssOptions: {
            //     plugins: [require('autoprefixer')],
            //   },
            // },
          },
        ],
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
