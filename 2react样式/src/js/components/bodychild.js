//从子模块传递参数到父模块
import React from "react";

export default class BodyChild extends React.Component{
  render(){
    return (
      <div>
        <label>子页面输入：
          <input type="text" onChange={this.props.handleChildValueChange} placeholder={"请输入改变父模块的值"}/>
        </label>
        <p>爷模块传递给孙模块的userid是:{this.props.userid},username是{this.props.username},父模块新增的id是{this.props.id}</p>

      </div>
    );
  };
}