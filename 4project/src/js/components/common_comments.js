import React from "react";
import ReactDOM from "react-dom";

import {
  Row,
  Col,
  Menu,
  Icon,
  Tabs,
  message,
  From,
  Input,
  Button,
  CheckBox,
  Modal} from "antd";

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

import {Router,Route,Link,browserHistory} from "react-router";

class CommonComments extends React.Component{

  //构造函数
  constructor(){
    super();
    this.state = {
      comments:""//评论
    }
  }

  render(){
    return(
      <div className="comment">
        <Row>
          <Col span={24}>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label={"您的评论"}>
                {/*注意写法要修改*/}
                <Input type={"textarea"} placeholder={"随便写"} {...getFieldProps("remark",{initialValue:""})} />
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  };
};

