import React from "react";

//导入PC浏览器的头部尾部
import PCHeader from "./pc_header";
import PCFooter from  "./pc_footer";

export default class PCIndex extends React.Component{
  render(){
    return(
      <div>
        <PCHeader/>
        <PCFooter></PCFooter>
      </div>
    );
  };
};