import React from "react";
import {Row,Col} from "antd";
import {Router,Route,Link,browserHistory} from "react-router";

//导入点击加载数据组件
import TouchLoader from "react-touch-loader";

export default class MobileList extends React.Component{

  //react-touch-loader初始化定义
  constructor(){
    super();
    this.state = {
      news:"",

      count:5,                //react-touch-loader默认加载5条数据
      hasMore:0,              //react-touch-loader设置组件隐藏加载更多按钮
      initializing:1,         //react-touch-loader初始化状态开始，显示进度条
      refreshedAt: Date.now(),//react-touch-loader某参数

    }
  };

  /*react-touch-loader的点击方法
    resolve参数是为了关闭等待的那个滚动圈圈
    2e3表示2乘以(10的三次方)等于2000
  */
  loadMore(resove){
    setTimeout(() => {
      var count = this.state.count;
      this.setState({
        count:count + 5
      })
      /*设置请求的调用。
      * 注意：和页面一次性调用不同的是，count的值是当前模块设置的count+5，不是父模块传递过来的
      * */
      var myFetchOptions = {
        method:"GET"
      }
      console.log(this.props.type);
      console.log(this.state.count);
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.state.count,myFetchOptions)
        .then(response => response.json())
        .then(json => {
          //获取请求的数据并赋给news
          this.setState({
            news:json
          })
          //判定
          this.state({
            hasMore:count > 0 && count < 50
          });
          //结束
          resove();
        })
    },2e3)
  };

  //页面加载完成后
  componentDidMount(){
    this.setState({
      hasMore:1,      //设置组件显示加载更多按钮
      initializing:2  //设置组件初始化完成,隐藏进度条
    });
  }

  render(){

    //实现react-touch-loader的一些方法
    var {hasMore,initializing,refreshedAt} = this.state;

    {/*循环数据*/}
    const {news} = this.state;
    const newsList = news.length
      ?
      news.map((newsItem,index) => (
        /*section是html5中表示文章、页眉、页脚或文档中的其他部分的标签*/
        <section key={index} class="m_news_list">
          {/*
          注意在字符串内添加变量需要使用 ${} 前面添加 $ 符号
          这个是ES6语法 字符串模板, 使用 `${变量}`的方法来代替 +号的字符串拼接
          */}
          <Link to={`details/${newsItem.uniquekey}`}>
            <div class="m_news_list_img">
              <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
            </div>
            <div class="m_news_list_info">
              <div>
                {newsItem.title}
              </div>
              <div>
                <span>{newsItem.realtype}</span>
                <span>{newsItem.date}</span>
              </div>
            </div>
          </Link>
        </section>
      ))
      :
      "没有加载到任何新闻"
    ;

    return(
      <div>
        <Row>
          <Col span={24}>

            {/*之前是直接调用 {newsList} 模块，这里点击加载需要在外面套一层react-touch-loader*/}
            <TouchLoader onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
              {newsList}
            </TouchLoader>

          </Col>
        </Row>
      </div>
    );
  };
};