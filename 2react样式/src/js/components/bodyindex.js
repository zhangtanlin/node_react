import React from "react";
import ReactDom from "react-dom";

//引入bodychild模块
import BodyChild from "./bodychild";

/*
* 调用公共函数的mixins方法
* 注意：
* */
import ReactMixin from "react-mixin";
import MixinLog from "./mixins";

/*如果父模块传的值为空，但又希望子模块能够设置一些默认值时的定义方法，
  注意：但是必须在结尾把默认值赋给BodyIndex模块*/
const defaultProps = {
  username:"子模块默认username值是上单老夫子"
}

export default class BodyIndex extends React.Component{
  //所有的类都有一个构造函数【初始化的内容都放在constructor函数内】
  constructor(){
    //调用基类的所有初始化方法
    super();
    //初始化state赋值，只对当前模块起作用。state更改会导致节点立即更改，不会刷新页面
    this.state = {userName:"zhangxiaolin",age:17};
  }
  //事件绑定
  changeUserAge(){
    this.setState({age:50});

    //通过点击事件触发原生的样式修改【不推荐使用】(需要获取就是节点)
    var sub_btn = document.getElementById("sub_btn");
    ReactDom.findDOMNode(sub_btn).style.color = "red";
    //通过点击事件触发 ref的样式修改【推荐使用】(需要添加ref属性)。
    /*注意1：refs是访问组件内部DOM节点唯一可靠的方法
    * 注意2：不要在render或render之前对refs进行调用
    * 注意3：refs会自动销毁对子组件的引用*/
    this.refs.sub_btn.style.padding = "0 20px";

    //调用公共函数的打印方式
    MixinLog.log();

  }
  //子模块调用改变父模块的值
  handleChildValueChange(event){
    this.setState({age:event.target.value});
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

    //更改state的方法，传参可以是JSON
    setTimeout(()=>{
      this.setState({userName:"张小霖"});
    },4000);
    return (
      <div>
        <h2>这里是主体内容</h2>
        {/*&nbsp的Unicode码是  \u0020*/}
        <p>{userName == "" ? "用户还没有登陆" : "用户名：" + userName}</p>
        <p><input type="button" value="默认按钮" disabled={bool}/></p>
        {/*调用state的方法。*/}
        <p>{this.state.userName}已经{this.state.age}岁了！</p>
        {/*接收父模块传递来的参数，可以使用this.props.参数名*/}
        <p>父模块传来的userid：{this.props.userid}，username：{this.props.username}</p>
        {/*通过点击事件改变age的值。
        注意1：事件和setTimeout方法有冲突。ES6和ES5事件有区别
        注意2：如果需要传递默认值时需写this和默认值，在事件函数中只用一个形参接收
        changeUserAge(default){
          this.setState({age:default});
        }
        <input type="button" value="点击改变age" onClick={this.changeUserAge.bind(this,99)}/>
        */}
        <p>age的值是：{this.state.age}</p>
        <input id="sub_btn" ref="sub_btn" type="button" value="点我改变age的值" onClick={this.changeUserAge.bind(this)}/>
        {/*通过改变子模块的值达到改变父模块的值的效果。获取了子模块的值，还需要绑定在父模块中
           handleChildValueChange={this.handleChildValueChange.bind(this)}
        */}
        {/*子模块怎么把父模块的值传递给孙模块，并在子模块增加属性值，一并传递给孙模块
           {...this.props} id={4}
        */}
        <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </div>
    )
  };
}

//定义BodyIndex模块中userid的数据类型
//如果模块需要的数据类型和传过来的数据类型不一致，会在控制台进行警告提示
//如果模块需要该数据类型必传，可以配置userid:React.PropTypes.number.isRequired
BodyIndex.prototypes = {
  userid:React.PropTypes.number
}

//把默认值赋给BodyIndex模块
BodyIndex.defaultProps = defaultProps;

//引入公共函数方法后，一定要把他扩展到当前模块中
ReactMixin(BodyIndex.prototype,MixinLog);
