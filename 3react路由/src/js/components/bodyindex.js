import React from "react";

//引入bodychild模块
import BodyChild from "./bodychild";

import ReactMixin from "react-mixin";
import MixinLog from "./mixins";

export default class BodyIndex extends React.Component{

  changeUserAge(){
    MixinLog.log();
  }

  render(){
    return (
      <div>
        <h2 onClick={this.changeUserAge.bind(this)}>这里是主体内容,点击有MixinLog方法</h2>
        <BodyChild/>
      </div>
    )
  };
}


//引入公共函数方法后，一定要把他扩展到当前模块中
ReactMixin(BodyIndex.prototype,MixinLog);