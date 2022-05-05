/**
 * @type { import('webpack').Configuration }
 */
module.exports = {
  output: {
    // 全局配置资源文件打包路径和文件名
    // assetModuleFilename: 'img/[name]-[hash:8][ext]',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      // 使用 file-loader
      // {
      //   test: /\.(jpe?g|png|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name]-[sha256:hash:8]-[emoji].[ext]',
      //         outputPath: 'img',
      //         esModule: false,
      //       },
      //     },
      //   ],
      //   type: 'javascript/auto',
      // },

      // 使用 url-loader
      // {
      //   test: /\.(jpe?g|png|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 3 * 1024 * 1024, // 3MB
      //         // 超出 limit 阈值时默认会使用 file-loader 处理 并且配置项会被传递给 file-loader
      //         name: '[name]-[sha256:hash:8]-[emoji].[ext]',
      //         outputPath: 'img',
      //         esModule: false,
      //       },
      //     },
      //   ],
      //   type: 'javascript/auto',
      // },

      // 使用 asset/resource 加载图片资源
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]-[hash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024 * 1024, // 3MB
          },
        },
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]-[hash:8][ext]',
        },
      },
    ],
  },
};
