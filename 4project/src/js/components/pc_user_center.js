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
      usercollection:"",     //我的收藏的数据【需要的state】
      usercomment:"",        //我的评论列表数据【需要的state】
      previewImage:"",       //设置预览图为空
      previewVisible : false //默认隐藏模态框
    };
  }

  //页面数据加载完成后，调用
  componentDidMount(){

    //获取收藏列表,并把值赋给state
    var myFetchOptions = {
      method:"GET"
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid="+localStorage.userid,
      myFetchOptions)
      .then(response => response.json())
      .then(json => {
        //注意setState()调用方法和this.state方法
        this.setState({
          usercollection:json
        });
      });

    //获取评论列表,并把值赋给state
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid="+localStorage.userid,
      myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          usercomment:json
        })
      });

  }

  render() {

    //上传头像的props定义【antd方法自带】
    const props = {
      //上传地址【地址需要后台提供】
      action:"//oygy32qzs.bkt.clouddn.com/reacttest",
      //响应头
      headers:{
        "Access-Control-Allow-Origin":"*"
      },
      listType:"picture-card",
      //设置默认图片显示【antd自带方法】
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

    /*我的收藏列表定义展示
      注意:{usercollection}等价于const usercollection = this.state.usercollection
    */
    const {usercollection} = this.state;
    const usercollectionList = usercollection.length
      ?
        usercollection.map((collection,index) => (
          /*用Card模块展示我的收藏数据
          * 注意extra的href链接调用方法
          * 当链接里面带参数时的固定写法用``包含
          * */
          <Card key={index} title={collection.uniquekey} extra={<a target="_blank" href={`/#/details/${collection.uniquekey}`}>查看所在新闻</a>}>
            <p>{collection.Title}</p>
          </Card>
        ))
      :
        "您还没有收藏新闻"
      ;

    //我的评论列表数据展示
    const {usercomment} = this.state;
    const usercommentList = usercomment.length
      ?
      usercomment.map((comment,index) => (
          <Card key={index} title={`您于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a href={`/#/details/${comment.uniquekey}`}>跳转被评论的文章</a>}>
            <p>{comment.Comments}</p>
          </Card>
        ))
      :
        "暂无评论，快去评论下吧"
      ;

    return (
      <div>
        <PCHeader/>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏" key="1">

                {/*我的收藏列表展示*/}
                <Row>
                  <Col span={24}>
                    {usercollectionList}
                  </Col>
                </Row>

              </TabPane>
              <TabPane tab="我的评论" key="2">

                {/*展示我的评论模块信息*/}
                <Row>
                  <Col>
                    {usercommentList}
                  </Col>
                </Row>

              </TabPane>
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