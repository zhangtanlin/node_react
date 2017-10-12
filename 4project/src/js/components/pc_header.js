import React from "react";
import {Link} from "react-router"

//引入antd的：栅格布局、导航、图标、表单、文本框、按钮、模态框、标签页
import {
  Row,
  Col ,
  Menu,
  Icon,
  Form,
  Input,
  Button,
  Modal,
  Tabs
} from 'antd';

//使用Form模块时定义
const FormItem = Form.Item;
//使用选项卡定义TabPane
const TabPane = Tabs.TabPane;

//由于Form模块后面会二次封装，所以先不能导出PCHeader，要先定义，所以先去掉：export default
class PCHeader extends React.Component{

  //控制第一个导航被选中
  constructor(){
    super();
    this.state = {
      //设置导航current为top
      current:"top",
      //定义模态框是否隐藏
      modalVisible:false,
      //控制按钮是用来展示登录还是注册页面
      action:"login",
      //定义是否已经登录
      hasLogined:false,
      //定义用户登录后的昵称
      userNickName:"",
      //定义userid
      userid:0
    }
  }

  //模态框的关闭按钮事件
  setModalVisible(value){
    this.setState({modalVisible:value});
  }

  //头部导航点击“登录/注册”按钮时
  handleClick(e){
    if(e.key == "register"){
      this.setState({current:"register"});
      //学习这种方法：修改定义了的state里面的key
      this.setModalVisible(true);
    }else{
      this.setState({current:e.key});
    }
  }

  //登录注册模态框注册页面提交时
  handleSubmit(e){
    //阻止事件冒泡
    e.preventDefault();
    //定义插件fetch参数
    var myFetchOption = {
      method:"GET"
    }
    //获取Form的值
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    //调用fetch的方法：fetch("url",options).then(response=>response.json())
    // fetch("url",options)
    //   .then(response=>response.json())
  }

  render(){
    //Form方法定义对象接受Form参数
    let {getFieldProps} = this.props.form;
    //根据用户登录状态，显示不同的样式【注意这是个三元运算】
    const userShow = this.state.hasLogined
    ?
      <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
        <Link target="_blank">
          <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button">退出</Button>
      </Menu.Item>
    :
      <Menu.Item key="register" class="register">
        <Icon type="appstore"/>登录/注册
      </Menu.Item>;
    return(
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            {/*logo*/}
            <a href="/" class="logo">
              <img src="./src/images/logo.png" alt="logo"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            {/*导航
                mode:垂直布局还是横向布局
                selectedKeys:默认被选中*/}
            <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="appstore"/>头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore"/>社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore"/>国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore"/>国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore"/>娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore"/>体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore"/>科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore"/>时尚
              </Menu.Item>
              {/*把根据用户登录与否的状态值加载到头部*/}
              {userShow}
            </Menu>

            {/*添加模态框及弹出层
               vertical-center-modal：表示垂直居中的弹出层
               onCancel：取消按钮事件
               okText：显示按钮文字
            */}
            <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onOk={() => this.setModalVisible(false)} onCancel={()=>this.setModalVisible(false)} okText="关闭">
              <Tabs type="card">
                <TabPane tab="注册" key="2">
                  <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账户">
                      {/*getFieldProps是把输入的文本绑定到r_userName上*/}
                      <Input placeholder="请输入您的账号" {...getFieldProps("r_userName")}/>
                    </FormItem>
                    <FormItem label="密码">
                      {/*getFieldProps是把输入的文本绑定到r_userName上*/}
                      <Input type="password" placeholder="请输入您的密码" {...getFieldProps("r_password")}/>
                    </FormItem>
                    <FormItem label="确认密码">
                      {/*getFieldProps是把输入的文本绑定到r_userName上*/}
                      <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps("r_confirmePassword")}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit">注册</Button>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  };
}

//Form的二次封装
export default PCHeader = Form.create({})(PCHeader);