import React from 'react';
import { Link } from 'react-router-dom';

export default class Index extends React.Component{
  render(){
    return(
      <div>
        <Link to='/login'>登录</Link>
        一个人首先得有梦想，必须得把这个目标化成你当前行动的一些小的目标。
        主要一个人，在一个小的台阶上逐步逐步的往前走，他总是向上发展的，他总是健康的，他总是心情感到愉悦的
      </div>
    );
  }
}


