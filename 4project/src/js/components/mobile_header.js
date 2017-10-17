import React from "react";
import {Link} from "react-router";

import {Row, Col , Menu, Icon, Form, Input, Button, Modal, Tabs,message} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

//对export进行二次封装,去掉
class MobileHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      current:"top",
      modalVisible:false,
      action:"login",
      hasLogined:false,
      userNickName:"",
      userid:0
    }
  }

  //登录方法
  login(){
    //登录方法需要把modal层显示出来
    this.setModalVisible(true);
  }

  setModalVisible(value){
    this.setState({modalVisible:value});
  }

  handleClick(e){
    if(e.key == "register"){
      this.setState({current:"register"});
      //学习这种方法：修改定义了的state里面的key
      this.setModalVisible(true);
    }else{
      this.setState({current:e.key});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    var myFetchOptions = {
      method:"GET"
    }
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action+"&username="+formData.userName+"&password="+formData.password+"&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions)
      .then(response=>response.json())
      .then(json=>{
        this.setState({
          userNickName:json.NickUserName,
          userid:json.UserId
        })
      });
    if(this.state.action == "login"){
      this.setState({"hasLogined":true});
    }
    message.success("请求成功");
    this.setModalVisible(false);
  }

  callback(key){
    if(key == 1){
      this.setState({action:'login'});
    } else if(key == 2){
      this.setState({action:'register'});
    }
  }

  //已经登录后的头部右侧按钮事件
  info(){
    message.info("还未开发");
  }

  render(){

    let {getFieldDecorator} = this.props.form;

    const userShow = this.state.hasLogined
      ?
      <spam onClick={this.info.bind(this)}>
        <Icon type="inbox"></Icon>
      </spam>
      :
      <Icon type="setting" onClick={this.login.bind(this)}></Icon>
    ;

    return(
      <div id="mobile_header">
        <header>
          <img src="./src/images/logo.png" alt="logo"/>
          <span>ReactNews</span>
          {userShow}

          <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onOk={() => this.setModalVisible(false)} onCancel={()=>this.setModalVisible(false)} okText="关闭">
            <Tabs type="card" onChange={this.callback.bind(this)}>

              {/*添加登录模块*/}
              <TabPane tab="登录" key="1">
                <Form onSubmit={this.handleSubmit.bind(this)}>
                  <FormItem label="账户">
                    {/*getFieldProps是把输入的文本绑定到r_userName上*/}
                    {getFieldDecorator("userName")(
                      <Input type="text" placeholder="请输入您的账号"/>
                    )}
                  </FormItem>
                  <FormItem label="密码">
                    {/*getFieldProps是把输入的文本绑定到r_userName上*/}
                    {getFieldDecorator("password")(
                      <Input type="password" placeholder="请输入您的密码"/>
                    )}
                  </FormItem>
                  <Button type="primary" htmlType="submit">登录</Button>
                </Form>
              </TabPane>

              <TabPane tab="注册" key="2">
                <Form onSubmit={this.handleSubmit.bind(this)}>
                  <FormItem label="账户">
                    {getFieldDecorator("r_userName")(
                      <Input type="text" placeholder="请输入您的账号"/>
                    )}
                  </FormItem>
                  <FormItem label="密码">
                    {getFieldDecorator("r_password")(
                      <Input type="password" placeholder="请输入您的密码"/>
                    )}
                  </FormItem>
                  <FormItem label="确认密码">
                    {getFieldDecorator("r_confirmPassword")(
                      <Input type="password" placeholder="请再次输入您的密码"/>
                    )}
                  </FormItem>
                  <Button type="primary" htmlType="submit">注册</Button>
                </Form>
              </TabPane>
            </Tabs>
          </Modal>
        </header>
      </div>

    );
  };
}

export default MobileHeader = Form.create({})(MobileHeader);