/*
  注意1：以前路由默认入口是index.js文件，现在写了rout路由文件了
  package.json的main入口文件就需要使用rout.js文件了
  注意2：同时webpack.config.js配置文件也需要修改
  extry的值需要改成./src/js/rout.js
*/

import React from "react";
import ReactDOM from "react-dom";

//引入react-router模块及其主要模块
import {Router,Route,hashHistory} from "react-router";

//引入路由模块
import Index from "./index";
import  ComponentList from "./components/list";

export default class Root extends React.Component{
  render(){
    return (
      //这里返回的是程序入口不是之前的模块
      <Router history={hashHistory}>
        <Route component={Index} path="/"></Route>
        <Route component={ComponentList} path="list"></Route>
      </Router>
    );
  };
}
//注意这里需要吧程序入口添加到节点中
ReactDOM.render(<Root/>,document.getElementById("example"));
