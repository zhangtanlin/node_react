import React from "react";

//导入mobile列表页
import MobileList from "./mobile_list";

//导入选项卡、轮播图模块
import { Tabs} from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component{
  render(){

    return(
      <div>

        <Tabs tabPosition="top" defaultActiveKey="1">
          <TabPane tab="头条" key="1">
            {/*
            展示新闻列表
            type表示地址的key【注意是字符串】
            count表示展示条数【注意是字符串也可以是数字】
            */}
            <MobileList type={"top"} count={"20"}></MobileList>
          </TabPane>
          <TabPane tab="社会" key="2">
            <MobileList type={"shehui"} count={"20"}></MobileList>
          </TabPane>
          <TabPane tab="国内" key="3">
            <MobileList type={"guonei"} count={"20"}></MobileList>
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList type={"guoji"} count={"20"}></MobileList>
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList type={"yule"} count={"20"}></MobileList>
          </TabPane>
          <TabPane tab="体育" key="6">
            <MobileList type={"tiyu"} count={"20"}></MobileList>
          </TabPane>
          <TabPane tab="科技" key="7">
            <MobileList type={"keji"} count={"20"}></MobileList>
          </TabPane>
        </Tabs>

      </div>
    );
  };
};