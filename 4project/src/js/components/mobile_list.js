import React from "react";
import {Row,Col} from "antd";
import {Router,Route,Link,browserHistory} from "react-router";

export default class MobileList extends React.Component{

  //初始化定义
  constructor(){
    super();
    this.state = {
      news:""
    }
  };

  //请求
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
            {newsList}
          </Col>
        </Row>
      </div>
    );
  };
};