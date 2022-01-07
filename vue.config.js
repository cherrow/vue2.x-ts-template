const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  configureWebpack: {
    entry: './src/main.ts',
    resolve: { extensions: ['.ts', '.tsx'] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            transpileOnly: true,
            appendTsSuffixTo: [/\.vue$/],
            happyPackMode: false,
          },
        },
      ],
    },
    plugins: [
      // 用于提供完善的报错信息
      new ForkTsCheckerWebpackPlugin({
        async: false,
        typescript: {
          // 提供对 .vue 单文件的检测支持
          extensions: {
            vue: true,
          },
        },
      }),
    ],
  },
}
