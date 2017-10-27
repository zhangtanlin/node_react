import React from "react";
import ReactDOM from "react-dom";

//引入栅格布局、表单、文本框、按钮、卡片、全局提示框】
import {Row, Col, Form, Input, Button,Card,notification } from "antd";
const FormItem = Form.Item;

import {Router,Route,Link,browserHistory} from "react-router";

class CommonComments extends React.Component{

  /*构造函数
  注意：所有的代码都包含在constructor里面
  */
  constructor(){
    super();
    this.state = {
      comments:""//文章评论
    }
  }

  //获取文章评论模块加载前调用接口
  componentWillMount(){
    var myFetchOption = {
      method:"GET"
    }
    //地址参数uniquekey应该是：父模块传递过来的动态值
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+
      this.props.uniquekey,
      myFetchOption)
      .then(response => response.json())
      .then(json => {
        this.setState({
          comments:json
        });
      });
  }

  //评论提交方法
  handleSubmit(e){
    e.preventDefault();//禁止冒泡
    //评论提交调用
    var myFetchOptions = {
      method:"GET"
    }
    //获取表单里的数据并序列化【注意大小写】
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    /*
    请求详情页地址【地址参数应该是：父模块传递过来的动态值】
    参数userid是从缓存获取
    参数uniquekey是从外部传进来
    参数commnet是当前模块输入的评论记住是：commnet，下面的一些参数用的是comment
    */
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+
      localStorage.userid+"&uniquekey="+
      this.props.uniquekey+"&commnet="+
      formData.remark,
      myFetchOptions)
      .then(response => response.json())
      .then(json => {
        //注意：添加了评论后，只需要调用一下，获取文章评论即可【注意写法】
        this.componentWillMount();
      });
  };

  //添加收藏按钮的方法
  addUserCollection(){
    var myFetchOptions = {
      method:"GET"
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+
      this.props.uniquekey,myFetchOptions)
      .then(response => response.json())
      .then(json => {

        //收藏成功后，进行提醒【写法一】
        // notification.open({message:"ReactNews提醒","description":"收藏成功"});
        //收藏成功后，进行提醒【写法二】
        notification["success"]({message:"ReactNews提醒","description":"收藏成功"});

      });
  }

  render(){

    //定义表单参数【注意写法和下面表单内容的搭配】
    let { getFieldDecorator } = this.props.form;

    /*获取文章评论并循环加载
      注意：获取的是state的值,不是this.state.comments
    */
    // console.log(this.state);
    // console.log(this.state.length);
    // console.log(this.state.comments);
    // console.log(this.state.comments.length);
    const {comments} = this.state;
    const commentList =  comments.length
      ?
      comments.map((comment,index) => (
        <Card key={index} title={comment.UserName} extra={<a href="#">发表于{comment.datetime}</a>}>
          <p>{comment.Comments}</p>
        </Card>
      ))
      :
      "没有加载到任何评论"
    ;

    return(
      <div className="comment">
        <Row>
          <Col span={24}>

            <br/>
            <hr/>
            <br/>

            {/*引入获取文章评论模块*/}
            {commentList}

            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">

                {/*注意写法要修改*/}
                {getFieldDecorator("remark")(
                  <Input type="textarea" placeholder="随便写"/>
                )}

              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>

              {/*添加收藏按钮*/}
              <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏</Button>

            </Form>
          </Col>
        </Row>
      </div>
    );
  };
};

//因为使用了form所以需要二次封装
export default CommonComments = Form.create({})(CommonComments);

