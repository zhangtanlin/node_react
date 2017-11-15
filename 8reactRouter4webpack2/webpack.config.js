const wevpack = require('webpack');
const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  extry:{
    alert_number: './src/js/alert_number.js',
    alert_string: './src/js/alert_string.js',
    all:['./src/js/alert_number.js','./src/js/alert_string.js']
  },
  output:{
    path: path.resolve(__dirname,'./dist'),
    filename: 'js/[name].js'

  },
  plugins: [
    new htmlWebpackPlugin({
      template:'index.html',
      filename:'index-[hash].html'
    })
  ]
}