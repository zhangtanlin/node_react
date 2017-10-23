import React from "react";

import {Row,Col,BackTop} from "antd";
import {Router,Route,Link,browserHistory} from "react-router";

import MobileHeader from "./mobile_header";
import MobileFooter from  "./mobile_footer";

export default class MobileNewsDetails extends React.Component {

  constructor(){
    super();
    this.state = {
      newsItem:""
    }
  }

  createArticle(){
    return {__html:this.state.newsItem.pagecontent};
  }

  componentWillMount(){
    var myFetchOption = {
      method:"GET"
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.params.uniquekey,myFetchOption)
      .then(response => response.json())
      .then(json => {
        this.setState({
          newsItem:json
        });
        document.title = this.state.newsItem.title + "-React News | React驱动的新闻平台"
      });
  }

  render(){
    return(
      <div id="mobileDetail">

        <MobileHeader/>

        <Row>
          <Col span={24}>
            <div dangerouslySetInnerHTML={this.createArticle()}></div>
          </Col>
        </Row>

        <MobileFooter></MobileFooter>

        <BackTop/>

      </div>
    );
  };
};