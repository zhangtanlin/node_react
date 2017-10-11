import React from "react";
import ReactDOM from "react-dom";

//引入react-router
import {Router,Route,hashHistory} from "react-router";

import Index from "./index";

//导入list模块
import ComponentList from "./components/list";

//导入index子路由的detail模块
import ComponentDetail from "./components/detail";


export default class Root extends React.Component{
  render(){
    return(
      //这里写路由规则，替换了之前的模块
      <Router history={hashHistory}>
        {/*访问localhost:8080*/}
        <Route component={Index} path="/">
          {/*这里的ComponentDetale是嵌套在Index路由里面的路由
             访问localhost:8080/#/detail*/}
          <Route component={ComponentDetail} path="detail"></Route>
        </Route>
        {/*http://localhost:8080/#/list参数的传递
           /:id
           这种格式把id传递给模块
           */}
        <Route component={ComponentList} path="list/:id"></Route>
      </Router>
    );
  };
};

//把Root路由，带入节点中
ReactDOM.render(<Root/>,document.getElementById("example"));

