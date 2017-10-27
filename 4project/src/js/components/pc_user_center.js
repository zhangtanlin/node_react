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
      previewVisible : false,
      previewImage:0,
      fileList :[]
    };
  }


  handleCancel(){
    this.setState({
      previewVisible: true
    })
  }

  handlePreview (file){
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange ({ fileList }){
    this.setState({ fileList })
  }

  render() {

    //定义默认加载一张图片
    const props = {
        previewVisible: false,
        previewImage: '',
        fileList: [{
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }]
    }

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

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
                <Upload action="//jsonplaceholder.typicode.com/posts/"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="预览图" src={previewImage} />
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