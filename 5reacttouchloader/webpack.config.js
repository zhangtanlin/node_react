/*注意：
  webpack-dev-server --contentbase src --inline --hot --port 80
  可以设置不同的端口号
*/
var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: path.join(__dirname),
  entry: "./src/js/root.js",
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: "babel-loader",
      query: {
        presets: ["react","es2015"],
        plugins:["react-html-attrs"]
      }
    },
    {
      test:/\.css?$/,
      loader:"style-loader!css-loader"
    },
     {
       //react-touch-loader需要配置less解析器
       //需要用cnpm安装less和less-loader
       test:/\.less$/,
       loader:"style!css!less"
     }]
  },
  output: {
    path:__dirname,
    filename: "./src/bundle.js"
  }
}
