var React = require("react");
var ReactDOM = require("react-dom");

class Index extends React.Component{
  render(){
    return(
      <div>789,world!</div>
    );
  }
}

ReactDOM.render(<Index/>,document.getElementById("example"));
