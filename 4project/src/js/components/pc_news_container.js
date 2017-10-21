import React from "react";
//引入antd的：栅格布局、标签页、轮播图、
import {Row,Col,Tabs,Carousel} from "antd";

const TabPane = Tabs.TabPane;

export default class PCnewsContainer extends React.Component{
  render(){

    {/*定义settings设置*/}
    const settings = {
      dots:true,
      infinine:true,
      speed:500,
      slidesToShow:1,
      autoplay:true
    }

    return (
      <div>
        <Col span={2}></Col>
        <Col span={20} class="container">
          <div class="leftContainer">
            <div class="carousel">
              {/*Carousel有一些settings色设置引入*/}
              <Carousel {...settings}>
                {/*注意这里的图片路径是绝对路径【从src开始】*/}
                <div><img src="./src/images/carousel_1.jpg" alt="1"/></div>
                <div><img src="./src/images/carousel_2.jpg" alt="2"/></div>
                <div><img src="./src/images/carousel_3.jpg" alt="3"/></div>
              </Carousel>
            </div>
          </div>
        </Col>
        <Col span={2}></Col>
      </div>
    )
  }
};
