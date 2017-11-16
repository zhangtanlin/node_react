/*用 wenpack 编译*/

const wevpack = require('webpack');
const path = require('path');
//处理html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//处理css

module.exports = {
  entry:{
    all:
      [
        './src/css/public.css',
        './src/css/li.css',
        './src/css/p.css',
        './src/css/table.css'
      ],
    all:
      [
        './src/js/alert_number.js',
        './src/js/alert_string.js'
      ]
  },
  output:{
    path: path.resolve(__dirname,'./dist'),
    filename: 'js/[name].js'

  },
  devServer:{
    port:8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'测试统一title',
      template:'./src/index.html',
      filename:'index-[hash].html',
      /*
      *inject的取值默认true
      * true或者body：所有JavaScript资源插入到body元素的底部
      * head: 所有JavaScript资源插入到head元素中
      * false： 所有静态资源css和JavaScript都不会注入到模板文件中
      * */
      inject:'body',
      /*
      *hash的取值默认false
      * 是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
      * */
      hash:false
    })
  ]
}