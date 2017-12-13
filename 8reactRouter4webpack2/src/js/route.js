import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

import Index from './components/index';
import Login from './components/login';

class Root extends React.Component{
 render(){
   return (
     <Router>
       <div>
         <Route path='/' component={Index}></Route>
         <Route path='/login' component={Login}></Route>
       </div>
     </Router>
   );
 }
};

ReactDOM.render(<Root/>,document.getElementById("example"));