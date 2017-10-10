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
        //把ES6解析成ES5
        presets: ["react","es2015"],
        //把react中的className替换成class
        plugins:["react-html-attrs"]
      }
    },
    //添加css的loader，即css的模块化配制方法
    {
      test:/\.css?$/,
      //不需要本地化代码格式化，就是用这个loader还原代码【特别是使用现有框架时使用】
      loader:"style-loader!css-loader"
      //开发组件时，需要使用这个loader
      // loader:"style!css-loader?modules&importLoaders=1&localIdentName=[name][loacl][hash:base64:5]"
    }]
  },
  output: {
    path:__dirname,
    filename: "./src/bundle.js"
  }
}
