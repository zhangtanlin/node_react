import React from "react";
import ReactDOM from "react-dom";

//在头部引入antd的input样式
import {Input} from "antd";

export default class ComponentHeader extends React.Component{

  //初始化header的状态【未被点击时】
  constructor(){
    super();
    this.state = {
      minheader:false
    }
  };

  //点击header的事件【点击后是初始化的否定状态】
  switchHeaderToggle(){
    this.setState({
      minheader:!this.state.minheader
    });
  };

  render(){
    /*
    * 定义header的样式。
    * 注意1：样式要写在render里面，return之前
    * 注意2：这里的样式是行间样式
    * 注意3：paddingTop也可以写成字符串"padding-top",虽然报错，但是不影响样式输出
    * 注意4：使用下面的行间的样式，需要在节点上绑定style：
    * <header style={styleComponentHeader.header}></header>
    * 注意5：这个样式里面可以写三元运算符【但是是要用小括号包起来，不是用大括号】
    * 注意6：JSX样式和css的相互转换可以采用css to react那个工具手动转换代码，把css转成json
    * */
    const styleComponentHeader = {
      header:{
        backgroundColor:"#333",
        color:"#fff",
        paddingTop: (this.state.minheader) ? "5px" : "15px",
        paddingBottom: (this.state.minheader) ? "5px" : "15px"
      }
    }

    return (
      <header style={styleComponentHeader.header} class="small" onClick={this.switchHeaderToggle.bind(this)}>
        <h1>这里是头部</h1>
        <br/>
        <Input placeholder="antd样式的input文本框"/>
      </header>
    )
  };

}
