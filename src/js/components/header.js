//引入必备的包
import React from "react";
import ReactDOM from "react-dom";
//【类的实现】创建一个类Header，让Header类继承React的Component这个子类
//注意：ComponentHeader组件必须是一个能够导出的组件，定义导出：export default
export default class ComponentHeader extends React.Component{
  //利用render解析类的输出
  render(){
    return (
      <header>
        <h1>这里是头部</h1>
      </header>
    )
  };
}
