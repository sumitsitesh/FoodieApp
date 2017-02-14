var React = require('react');
import Child from'./components/Sample/index.jsx';
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var GmailBox = require('./components/GmailBox');
var NavBar = require('./components/NavBar');
var About = require('./components/Sample/favourite.jsx');
var Home = require('./components/Sample/mainComponent.jsx');
var login = require('./components/Sample/login.jsx');

var MainComp = React.createClass({
  render:function(){
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
                <Route path = "/" component={login}/ >   
                <Route component = {MainComp} >
                <Route path = "/home" component={Home}/>
                <Route path = "/about" component={Child.Child3}/>
                <Route path = "/gmailbox" component={GmailBox}/>
                </Route>
  </Router>,document.getElementById('mountapp'));
