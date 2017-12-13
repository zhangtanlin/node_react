import React from 'react';
import ReactDOM from 'react-dom';

import { Card } from 'antd';

export default class Login extends React.Component{
  render(){
    return(
      <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    )
  }
}