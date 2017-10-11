import React from "react";

export default class ComponentList extends React.Component{
  render(){
    return(
      <div>
        <p>我是路由list的标题</p>
        {/*路由模块root把 /:id 参数id传过来之后，模块用 {this.props.params.id} 接收*/}
        <h2>路由模块传递归来的id是：{this.props.params.id}</h2>
      </div>
    );
  };
}