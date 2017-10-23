import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,hashHistory} from "react-router";

import "antd/dist/antd.css";

//导入PC端模块
import PCIndex from "./components/pc_index";
//导入PC端的新闻详情模块
import PCNewsDetails from "./components/pc_news_details";


//导入mobile模块
import MobileIndex from "./components/mobile_index";
//导入mobile端新闻详情页
import MobileNewsDetails from "./components/mobile_news_details";

//引入响应式的react布局的包
import MediaQuery from "react-responsive";

export default class Root extends React.Component{
  render(){
    return(
      <div>
        {/*屏幕做小宽度1225px时，调用*/}
        <MediaQuery query="(min-device-width:1225px)">

          {/*由于新闻详情模块需要利用动态id所以根据Router重构路由*/}
          <Router history={hashHistory}>
            <Route path="/" component={PCIndex}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
          </Router>

        </MediaQuery>
        {/*屏幕最大宽度1224px时，调用*/}
        <MediaQuery query="(max-device-width:1224px)">

          {/*手机端路由重构【和PC端差不多】*/}
          <Router history={hashHistory}>
            <Route path="/" component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
          </Router>

        </MediaQuery>
      </div>
    );
  };
};

ReactDOM.render(<Root/>,document.getElementById("mainContainer"));

