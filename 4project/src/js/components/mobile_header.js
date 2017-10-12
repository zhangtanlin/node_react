import React from "react";

export default class MobileHeader extends React.Component{

  render(){
    return(
      <header class="header">
        <img src="./src/images/logo.png" alt="logo"/>
        <span>ReactNews</span>
      </header>
    );
  };
}