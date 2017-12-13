var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: path.join(__dirname),
  entry: "./src/js/route.js",
  module: {
    rules: [{
      test: /\.js?$/,
      //跳过node_modules文件
      exclude: /(node_modules)/,
      use:{
        loader: "babel-loader",
        options: {
          presets: ["react","es2015"]
        }
      }
    }]
  },
  output: {
    //path:__dirname + "/dist/js",//如果需要静态资源再把这个打开
    filename: "bundle.js"
  }
}