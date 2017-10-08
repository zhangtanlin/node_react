import React from "react";
export default class BodyIndex extends React.Component{
  //所有的类都有一个构造函数
  constructor(){
    //调用基类的所有的初始化方法
    super();
  }

  render(){
    /**
     * JSX语法判定和绑定值
     * JSX绑定值需要写在{}里面。注意：不包含在引号中
     * JSX中绑定 &nbsp 这种特殊符号，需要转成Unicode码。注意：Unicode需要写在字符串中
     * JSX的注释需要包含在大括号中,且里面只能使用带星号的注释
     */
    var userName = "张\u0020小\u0020霖";
    var bool = true;
    return (
      <div>
        <h1>这里是主体内容</h1>
        {/*&nbsp的Unicode码是  \u0020*/}
        <p>{userName == "" ? "用户还没有登陆" : "用户名：" + userName}</p>
        <p><input type="button" value="默认按钮" disabled={bool}/></p>
      </div>
    )
  };
}
