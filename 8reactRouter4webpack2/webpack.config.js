const wevpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    all: './src/js/root.js'
  },
  module:{
    rules:[
      {
        test:/\.js?$/,
        exclude:/(node_modules)/,
        use:  {
          loader: 'babel-loader',
          options: {
            presets: ["react","es2015"],
            plugins:["react-html-attrs"]//转换react的className
          }
        }
      },
      {
        test:/\.css?$/,
        use:['style-loader!css-loader']
      }
    ]
  },
  output:{
    path: path.resolve(__dirname,'./dist'),
    filename: './src/bundle.js'

  },
  devServer:{
    port:8080
  },
  plugins: [

  ]
}