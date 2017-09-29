/*注意：
* 利用webpack --watch来监听每一次的改变
* */

var webpack = require("webpack");
var path = require("path");

module.exports = {
  context:__dirname+"/src",
  entry:"./js/index.js",
  module:{
    loaders:[{
      test:/\.js?$/,
      exclude:/(node_modules)/,   //跳过node_modules文件
      loader:"babel-loader",      //利用babel-loader解释(在项目安装babel-lodaer@6.3.2)
      query:{
        presets:["react","es2015"]
      }
    }]
  },
  output:{
    path:__dirname+"/src/",
    filename:"bundle.js"
  }
}
