import React from "react";

//导入mobile的头部尾部模块
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";

//导入mobile列表页
import MobileList from "./mobile_list";

//导入选项卡、轮播图模块
import { Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component{
  render(){

    {/*定义轮播settings设置*/}
    const settings = {
      dots:true,
      infinine:true,
      speed:500,
      slidesToShow:1,
      autoplay:true
    }

    return(
      <div>
        <MobileHeader></MobileHeader>

        {/*加载轮播*/}
        <div class="carousel">
          {/*Carousel模块有一些settings色设置引入*/}
          <Carousel {...settings}>
            {/*注意这里的图片路径是绝对路径【从src开始】*/}
            <div><img src="./src/images/carousel_1.jpg" alt="1"/></div>
            <div><img src="./src/images/carousel_2.jpg" alt="2"/></div>
            <div><img src="./src/images/carousel_3.jpg" alt="3"/></div>
          </Carousel>
        </div>

        {/*手机端可左右滑动的导航*/}
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

        <MobileFooter></MobileFooter>
      </div>
    );
  };
};