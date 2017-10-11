var React = require("react");
var ReactDOM = require("react-dom");

import ComponentHeader from "./components/header";
import BodyIndex from "./components/bodyindex";
import ComponentFooter from "./components/footer";

import "antd/dist/antd.css";
import { Tag } from 'antd';

export default class Index extends React.Component{
  render(){
    return(
      <div>
        <ComponentHeader/>
        <BodyIndex/>

        {/*这个div是用来存放index模块的子路由的details的*/}
        <div>
          <Tag color="pink">{this.props.children}</Tag>
        </div>

        <ComponentFooter/>
      </div>
    );
  }
}

//把Index组件和页面上的id进行绑定
ReactDOM.render(<Index/>,document.getElementById("example"));
