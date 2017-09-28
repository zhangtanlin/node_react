var webpack = require("webpack");
var path = require("path");

module.exports = {
  context:__dirname+"/src",
  entry:"./js/index.js",
  module:{
    loaders:[{
      test:/\.js?$/,
      exclude:/(node_modules)/,//跳过node_modules文件
      loader:"babel-loader",
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
