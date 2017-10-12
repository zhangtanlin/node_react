import React from "react";

//导入mobile的头部尾部模块
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";

export default class MobileIndex extends React.Component{
  render(){
    return(
      <div>
        <MobileHeader></MobileHeader>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
};