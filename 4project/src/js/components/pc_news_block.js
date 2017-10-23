import React from "react";
import {Card} from "antd";
import {Router,Route,Link,browserHistory} from "react-router";

export default class PCNewsBlock extends React.Component{

  //函数构造
  constructor(){
    //调用根函数
    super();
    this.state = {
      news:""//所有新闻列表
    }
  };

  //使用生命周期，组件加载前
  componentWillMount(){
    //定义Fetch的一些参数【注意是GET】
    var myFetchOptions = {
      method:"GET"
    };
    /*调用Fetch方法(top:表示,count表示展示的条数。最后返回的是新闻列表数据)
      注意：这里的type和count是继承自父模块
    */
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count,myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          news: json
        })
      });
  };

  render(){

    //定义和判定获取新闻的数据条数
    const {news} = this.state;
    const newsList = news.length
      ?
      //es6的循环数据的函数方法
      news.map((newsItem,index) => (
        <li key={index}>
          {/*
          注意在字符串内添加变量需要使用 ${} 前面添加 $ 符号
          这个是ES6语法 字符串模板, 使用 `${变量}`的方法来代替 +号的字符串拼接
          */}
          <Link to={`details/${newsItem.uniquekey}`} target="_black">
            {newsItem.title}
          </Link>
        </li>
      ))
      :
      "没有加载到任何新闻"
    ;

    return(
      <div class="topNewsList">
        <Card>
          <ul>
            {/*调用列表数据*/}
            {newsList}
          </ul>
        </Card>
      </div>
    );
  };
}

