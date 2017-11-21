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
        exclude:/node_modules/,
        loader: 'babel-loader'
      },
      {
        test:/\.css?$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader'}
        ]
      }
    ]
  },
  output:{
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  devServer:{
    port:8080
  },
  plugins: [

  ]
}