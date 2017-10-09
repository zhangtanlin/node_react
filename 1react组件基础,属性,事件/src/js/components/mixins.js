/*
* 由于react更多的采用的是ES6的写法，所以mixin也更多地使用ES6写法，这就需要使用一个mixin的插件
* react-mixin
* 在引入mixins之前应该还要引入react-mixin插件
* */
const MixinLog = {
  //注意：mixin里面有生命周期
  componentWillMount(){
    console.log("mixin - componentWillMount")
  },
  componentDidMount(){
    console.log("mixin - componentDidMount")
  },
  //主要是里面的JSON方法
  log(){
    console.log("我是一个minin的log方法");
  }
};
export default MixinLog;