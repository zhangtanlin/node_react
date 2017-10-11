//如果不需要引入react-dom可以不引入，但是react是必须要引入的
import React from "react";

//用common.js规范引入footer.css模块
var footerCSS = require("../../css/footer.css");

export default class ComponentFooter extends React.Component{
  render(){
    return (
      <footer class={footerCSS.miniFooter}>
        <h6>这里是版权信息</h6>
      </footer>
    )
  };
}
