import React from "react";
import {Link} from "react-router";

//引入antd的：栅格布局、导航、图标、表单、文本框、按钮、模态框、标签页、提示纤细【小写】
import {Row, Col , Menu, Icon, Form, Input, Button, Modal, Tabs,message} from 'antd';

//导航子菜单方法
const SubMenu = Menu.SubMenu;
//菜单类
const MenuItemGroup = Menu.ItemGroup;
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

  /*由于页面f5刷新后，页面就会被重置，所以需要利用
  * react的生命周期的页面加载之前判定html5的缓存数据,并把缓存数据赋给相应的值*/
  componentWillMount(){
    //判定loaclStorage的缓存数据
    if(localStorage.userid != ""){
      this.setState({hasLogined:true});
      this.setState({
        userNickName:localStorage.userNickName,
        userid:localStorage.userid
      })
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
  //登录注册模态框的切换
  callback(key){
    if(key == 1){
      this.setState({action:false});
    }else if(key == 2){
      this.setState({action:true});
    }
  }

  //登录注册模态框注册页面提交时
  handleSubmit(e){
    //阻止事件冒泡
    e.preventDefault();
    //定义插件fetch参数
    var myFetchOptions = {
      method:"GET"
    }
    //获取Form的值
    var formData = this.props.form.getFieldsValue();
    /*
    url:http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=r_userName&r_password=r_password&r_confirmPassword=r_confirmPassword
    调用fetch的方法：fetch("url",options).then(response=>response.json())
    更改action的值判定是登陆还是注册
    */
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action+"&username="+formData.userName+"&password="+formData.password+"&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions)
      .then(response => response.json())
      .then(json => {
        //验证成功后修改state的值
        this.setState({
          userNickName:json.NickUserName,
          userid:json.UserId//注意是大写
        })
        //登录注册成功后需要利用html5缓存相关数据【为后续登出清除缓存使用】
        localStorage.userid = json.UserId;
        localStorage.userNickName = json.NickUserName;

      });
    //判定是登录成功,修改setState状态值为已登录
    if(this.state.action == "login"){
      this.setState({"hasLogined":true});
    }

    //请求成功后显示一条message信息。注意小写
    message.success("请求成功");
    //请求成功后，隐藏模态框
    this.setModalVisible(false);
  }

  //通过setState来改变提交地址的action
  callback(key){
    if(key == 1){
      this.setState({action:'login'});
    } else if(key == 2){
      this.setState({action:'register'});
    }
  }

  //退出登录事件
  logout(){
    //退出登录清除数据缓存
    localStorage.userid = "";
    localStorage.userNickName = "";
    //利用react的state的设置修改虚拟dom从而达到改变dom的目的
    this.setState({hasLogined:false});
  }

  render(){
    //Form方法定义对象接受Form参数。注意getFieldDecorator的用法
    let {getFieldDecorator} = this.props.form;
    //根据用户登录状态，显示不同的样式【注意这是个三元运算】
    const userShow = this.state.hasLogined
    ?
      <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>

        {/*注意：这里是直接调用的Rout里面的个人中心路由,用上斜点包围。
        添加target="_blank"表示重新打开一个页面
           重点：可以直接在Link后面添加to调用Rout里面的路由*/}
        <Link to={`/usercenter`}>
          <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
        {/*在退出按钮上绑定退出登录事件*/}
        <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
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
              {/*利用Tab进行切换*/}
              <Tabs type="card" onChange={this.callback.bind(this)}>
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
                      {/*getFieldProps是把输入的文本绑定到r_userName上*/}
                      {getFieldDecorator("r_userName")(
                        <Input type="text" placeholder="请输入注册账号"/>
                      )}
                    </FormItem>
                    <FormItem label="密码">
                      {/*getFieldProps是把输入的文本绑定到r_userName上*/}
                      {getFieldDecorator("r_password")(
                        <Input type="password" placeholder="请输入注册密码"/>
                      )}
                    </FormItem>
                    <FormItem label="确认密码">
                      {/*getFieldProps是把输入的文本绑定到r_userName上*/}
                      {getFieldDecorator("r_confirmPassword")(
                        <Input type="password" placeholder="请再次输入注册密码"/>
                      )}
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