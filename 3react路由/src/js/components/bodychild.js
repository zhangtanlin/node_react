//从子模块传递参数到父模块
import React from "react";

export default class BodyChild extends React.Component{
  render(){
    return (
      <div>
        <label>子页面输入：
          <input type="text" placeholder={"请输入改变父模块的值"}/>
        </label>
      </div>
    );
  };
}