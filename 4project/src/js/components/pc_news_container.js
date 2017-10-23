import React from "react";
//引入antd的：栅格布局、标签页、轮播图、
import {Row,Col,Tabs,Carousel} from "antd";
const TabPane = Tabs.TabPane;

//导入新闻列表模块【动态模块】
import PCNewsBlock from "./pc_news_block";

//导入新闻图片模块
import PCNewsImageBlock from "./pc_news_image_block";

export default class PCNewsContainer extends React.Component{
  render(){

    {/*定义轮播settings设置*/}
    const settings = {
      dots:true,
      infinine:true,
      speed:500,
      slidesToShow:1,
      autoplay:true
    }

    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            {/*加载轮播*/}
            <div class="leftContainer">
              <div class="carousel">
                {/*Carousel模块有一些settings色设置引入*/}
                <Carousel {...settings}>
                  {/*注意这里的图片路径是绝对路径【从src开始】*/}
                  <div><img src="./src/images/carousel_1.jpg" alt="1"/></div>
                  <div><img src="./src/images/carousel_2.jpg" alt="2"/></div>
                  <div><img src="./src/images/carousel_3.jpg" alt="3"/></div>
                </Carousel>
              </div>

              {/*加载新闻图片模块【注意：参数和多次调用pc_news_image_block.js】*/}
              <PCNewsImageBlock count={6} type={"guoji"} cartTitle={"国际头条"} imageWidth={"112px"}></PCNewsImageBlock>
              <PCNewsImageBlock count={3} type={"yule"} cartTitle={"娱乐头条"} imageWidth={"112px"}></PCNewsImageBlock>

            </div>
            {/*加载新闻列表【通过TabPane多次调用pc_news_block模块】*/}
            <div class="tabs_news">
              <Tabs>
                <TabPane tab="头条新闻" key="1">
                  {/*type表示新闻类型，top表示头条【请求地址的参数】；count表示新闻条数。
                注意：{10}和"10"这两种写法，都能定义参数【子模块都能接收得到】*/}
                  <PCNewsBlock type="top" count={23} border={false}></PCNewsBlock>
                </TabPane>
                <TabPane tab="国际" key="2">
                  <PCNewsBlock type="guoji" count={23} border={false}></PCNewsBlock>
                </TabPane>
              </Tabs>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
};
