import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import reducer from "./components/reducers";

export default class Root extends React.Component{
  inc(){
    return {type:'ADD'};
  }
  dec(){
    return {type:'SUB'};
  }

  componentDidMount(){
    //初始化时，传递的参数是reducer
    var store = createStore(reducer);

    //输出state
    console.log(store.getState());

    //触发加法,并输出state
    store.dispatch(this.inc());
    console.log(store.getState());

    //触发加法,并输出state
    store.dispatch(this.inc());
    console.log(store.getState());

    //触发减法,并输出state
    store.dispatch(this.dec());
    console.log(store.getState());

  }

  //页面上显示的内容
  render(){
    return (
      <div>
        REDUX
      </div>
    );
  }

}

ReactDOM.render(<Root/>,document.getElementById("mainContainer"));