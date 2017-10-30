import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,Link,browserHistory} from "react-router";

//栅格布局、模态框、导航、图标、选项卡、提示信息、表单、按钮、复选框、面板、全局提示信息、上传控件
import {Row,Col,Modal,Menu,Icon,Tabs,message,Form,Input,Button,Checkbox,Card,notification,Upload} from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

import PCHeader from "./pc_header";
import PCFooter from  "./pc_footer";

export default class PCUserCenter extends React.Component {

  //获取和设置默认值
  constructor (){
    super();
    //定义上传按钮
    this.state = {
      previewImage:"",       //设置预览图为空
      previewVisible : false //默认隐藏模态框
    };
  }


  handleCancel(){
    this.setState({
      previewVisible: true
    })
  }

  render() {

    const props = {
      action:"//oygy32qzs.bkt.clouddn.com/reacttest",
      headers:{
        "Access-Control-Allow-Origin":"*"
      },
      listType:"picture-card",
      //设置antd自带方法，默认图片显示
      defaultFileList:[
        {
          uid:-1,
          name:"xxx.png",
          state:"done",
          url:"./src/images/pikaqiu.jpg",
          thumbUrl:"./src/images/pikaqiu.jpg"
        }
      ],
      //预览时设置预览图片地址和显示模态框
      onPreview:(file) => {
        this.setState({
          previewImage:file.url,
          previewVisible:true
        })
      }
    }

    return (
      <div>
        <PCHeader/>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏" key="1"></TabPane>
              <TabPane tab="我的评论" key="2"></TabPane>
              <TabPane tab="头像设置" key="3">

                {/*上传控件的调用。{...props}表示获取父组件传递来的值*/}
                <Upload {...props}>
                  <Icon type="plus"/>
                  <div className="ant-upload-text">上传照片</div>
                </Upload>
                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img src={this.state.previewImage} alt="预览图"/>
                </Modal>

              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter></PCFooter>
      </div>
    );
  };
};