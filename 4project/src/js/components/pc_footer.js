import React from "react";

//栅格布局
import { Row, Col } from 'antd';
//导航
import { Menu, Icon } from 'antd';

export default class PCFooter extends React.Component{

  render(){
    return(
      <footer>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="footer">
            &copy;&nbsp;ReactNwes&nbsp;woaimeimei
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    );
  };
}