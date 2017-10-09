/*注意：
* 使用webpack --watch来监听文件变化，但是需要手动刷新浏览器
* 使用webpack-dev-server来同时刷新浏览器，但是会有默认标题行和必须使用默认地址
* 使用webpack-dev-server --contentbase src --inline --hot来去掉默认标题和使用localhost://8080地址
* 注意1：使用webpack-dev-server会有使用地址提示
* 注意2：--watch是自动打包，--inline --hot是热加载
* */

var webpack = require("webpack");
var path = require("path");

module.exports = {
  //context：设置配置文件位置；__dirname：获取当前文件所在目录的完整目录名
  context: path.join(__dirname),
  entry: "./src/js/index.js",
  module: {
    loaders: [{
      test: /\.js?$/,
      //跳过node_modules文件
      exclude: /(node_modules)/,
      //利用babel-loader解释(在项目安装babel-lodaer@6.3.2)
      loader: "babel-loader",
      query: {
        presets: ["react","es2015"]
      }
    }]
  },
  output: {
    path:__dirname,
    filename: "./src/bundle.js"
  }
}
