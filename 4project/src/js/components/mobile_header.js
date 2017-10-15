import React from "react";
import {Link} from "react-router"

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
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=username&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions)
      .then(response=>response.json())
      .then(json=>{
        this.setState({
          userNickName:json.NickUserName,
          userid:json.userid
        })
      });
    message.success("请求成功");
    this.setModalVisible(false);
  }

  render(){

    let {getFieldDecorator} = this.props.form;

    const userShow = this.state.hasLogined
      ?
      <Link>
        <Icon type="inbox"></Icon>
      </Link>
      :
      <Icon type="setting" onClick={this.login.bind(this)}></Icon>
    ;

    return(
      <header class="header">
        <img src="./src/images/logo.png" alt="logo"/>
        <span>ReactNews</span>
        {userShow}

        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onOk={() => this.setModalVisible(false)} onCancel={()=>this.setModalVisible(false)} okText="关闭">
          <Tabs type="card">
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
    );
  };
}

export default MobileHeader = Form.create({})(MobileHeader);