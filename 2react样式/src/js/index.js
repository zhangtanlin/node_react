var React = require("react");
var ReactDOM = require("react-dom");
//引入头部的类
import ComponentHeader from "./components/header";
//引入主体的类
import BodyIndex from "./components/bodyindex";
//引入底部的类
import ComponentFooter from "./components/footer";

//创建首页类
class Index extends React.Component{
  //Index类的实现
  render(){
    //可以用参数的形式引入组件：var component = <Component/>;返回时用{component}引用；主要是用于判定显示哪些内容
    return(
      //调用头部组件
      //注意：这个return()里面只能够有一个节点，要返回多个节点需要把多个节点包含内
      <div>
        <ComponentHeader/>
        {/*利用props给子模块传参。注意：模块中传参使用大括号可以，测试使用字符串也可以*/}
        <BodyIndex userid={123456789} username={"打野老夫子"}/>
        <ComponentFooter/>
      </div>
    );
  }
}

//把Index组件和页面上的id进行绑定
ReactDOM.render(<Index/>,document.getElementById("example"));
