import React from "react";
import {Row,Col} from "antd";
import {Router,Route,Link,browserHistory} from "react-router";

//导入点击加载数据组件
import PullToRefresh from "react-pull-to-refresh";

export default class MobileList extends React.Component{

  //新闻信息初始化定义
  constructor(){
    super();
    this.state = {
      news:""
    }
  };

  //初始化请求数据
  componentWillMount(){
    var myFetchOptions = {
      method:"GET"
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count,myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          news: json
        })
      });
  };

  /*react-pull-to-refresh的下拉刷新方法
    resolve参数是为了关闭等待的那个滚动圈圈
  */
  handleRefresh(resolve){
    var myFetchOptions = {
      method:"GET"
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=yule&count=3",myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          news: json
        })
      });
    resolve();
  }

  render(){

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

            {/*加载下拉刷新模块*/}
            <PullToRefresh onRefresh={this.handleRefresh.bind(this)} style={{textAlign:"center"}}>

              {/*下拉刷新时的等待转圈图标*/}
              <span className="genericon genericon-next"></span>

              {/*数据列表*/}
              {newsList}

              </PullToRefresh>

          </Col>
        </Row>
      </div>
    );
  };
};