import React from "react";

//在头部引入antd的input样式
import {Input} from "antd";

//引入react-router的Link包
import {Link} from "react-router";

export default class ComponentHeader extends React.Component{

  render(){
    return (
      <header class="small">
        <h1>这里是头部</h1>
        <div>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/detail">首页内嵌的模块detail</Link></li>
            {/*当路由需要传递参数时，
               /:id
               可以在链接中直接书写传递参数
               /argument
               */}
            <li><Link to="/list/argument">不一样的列表页list</Link></li>
          </ul>
        </div>
        <Input placeholder="antd样式的input文本框"/>
      </header>
    )
  };

}
