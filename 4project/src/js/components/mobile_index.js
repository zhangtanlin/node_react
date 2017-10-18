import React from "react";

//导入mobile的头部尾部模块
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";

//导入tabs模块
import { Tabs} from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component{
  render(){
    return(
      <div>
        <MobileHeader></MobileHeader>

        {/*手机端可左右滑动的导航*/}
        <Tabs tabPosition="top" defaultActiveKey="1">
          <TabPane tab="头条" key="1">头条</TabPane>
          <TabPane tab="社会" key="2">社会</TabPane>
          <TabPane tab="国内" key="3">国内</TabPane>
          <TabPane tab="国际" key="4">国际</TabPane>
          <TabPane tab="娱乐" key="5">娱乐</TabPane>
          <TabPane tab="体育" key="6">体育</TabPane>
          <TabPane tab="科技" key="7">科技</TabPane>
          <TabPane tab="时尚" key="8">时尚</TabPane>
        </Tabs>

        <MobileFooter></MobileFooter>
      </div>
    );
  };
};