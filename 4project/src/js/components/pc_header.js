import React from "react";

//栅格布局
import { Row, Col } from 'antd';
//导航
import { Menu, Icon } from 'antd';

export default class PCHeader extends React.Component{

  //控制第一个导航被选中
  constructor(){
    super();
    this.state = {
      current:"top"
    }
  }

  render(){
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            {/*logo*/}
            <a href="/" class="logo">
              <img src="./src/images/logo.png" alt=""/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            {/*导航
                mode:垂直布局还是横向布局
                selectedKeys:默认被选中*/}
            <Menu mode="horizontal" selectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="to-top"/>头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="chrome"/>社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore"/>国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore"/>国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="mail"/>娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="mail"/>体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="mail"/>科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="dingding-o"/>时尚
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}>col-12</Col>
        </Row>
      </div>
    );
  };
}