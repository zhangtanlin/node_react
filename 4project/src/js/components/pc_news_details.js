import React from "react";

//引入antd的：栅格布局、回到顶部
import {Row,Col,BackTop} from "antd";
import {Router,Route,Link,browserHistory} from "react-router";

/*
【重点】由于新闻详情也模块没有页头页脚所以需要单独引用
【页头页脚是模块化的可以共享】
*/
import PCHeader from "./pc_header";
import PCFooter from  "./pc_footer";

//导入新闻图片模块
import PCNewsImageBlock from "./pc_news_image_block";

//导入评论模块
import CommonComments from "./common_comments";

export default class PCNewsDetails extends React.Component {

  //获取一条数据信息
  constructor(){
    super();
    this.state = {
      newsItem:""
    }
  }

  //定义获取html代码的方法
  createArticle(){
    return {__html:this.state.newsItem.pagecontent};
  }

  //模块加载前调用接口
  componentDidMount(){
    var myFetchOption = {
      method:"GET"
    }
    //请求详情页地址【地址参数应该是：父模块传递过来的动态值】
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.params.uniquekey,myFetchOption)
      .then(response => response.json())
      .then(json => {
        this.setState({
          newsItem:json
        });
        //设置html的title
        document.title = this.state.newsItem.title + "-React News | React驱动的新闻平台"
      });
  }

  render(){
    return(
      <div>

        {/*引入页头*/}
        <PCHeader/>

        <Row>
          <Col span={2}></Col>
          {/*加载的新闻详情信息*/}
          <Col span={14} class="container">
            {/*由于页面返回的是一个html地址,所以还需要请求这个地址，返回的是一个页面。
            这里利用dangerouslySetInnerHTML方法加载原始html代码*/}
            <div class="articleContainer" dangerouslySetInnerHTML={this.createArticle()}></div>

            {/*引入评论模块。
            注意：需要传递参数uniquekey，并且参数是从父元素获取*/}
            <CommonComments uniquekey={this.props.params.uniquekey}/>

          </Col>
          <Col span={6}>

            {/*引入新闻图片列表*/}
            <PCNewsImageBlock count={30} type="guoji" cartTitle="相关新闻" imageWidth="148px"></PCNewsImageBlock>

          </Col>
          <Col span={2}></Col>
        </Row>

        {/*引入页脚*/}
        <PCFooter></PCFooter>

        {/*返回顶部模块*/}
        <BackTop/>

      </div>
    );
  };
};