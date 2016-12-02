var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口
  entry: "./hello.js",
  // 输出的文件名
  output: {
    filename: 'bundle.js'
  },
  // 添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello Webpack'
    })
  ]
};