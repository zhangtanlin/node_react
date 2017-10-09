//如果不需要引入react-dom可以不引入，但是react是必须要引入的
import React from "react";
export default class ComponentFooter extends React.Component{
  render(){
    return (
      <footer>
        <h1>这里是版权信息</h1>
      </footer>
    )
  };
}
