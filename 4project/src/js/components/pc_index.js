import React from "react";

//导入PC浏览器的头部尾部
import PCHeader from "./pc_header";
import PCFooter from  "./pc_footer";

//导入新闻轮播图模块
import PCNewsContainer from "./pc_news_container";

export default class PCIndex extends React.Component{
  render(){
    return(
      <div>
        <PCHeader/>
        <PCNewsContainer></PCNewsContainer>
        <PCFooter></PCFooter>
      </div>
    );
  };
};