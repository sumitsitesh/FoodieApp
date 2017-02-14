// var React = require('react');
let {Link} = require('react-router');
// var NavBar = React.createClass({

// render:function(){
//   return(
//     <div className="container-fluid">
//     <ul className="nav navbar-nav">
//     <li><Link to="/home">Home</Link></li>
//     <li><Link to="/gmailbox">Gmail</Link></li>
//     <li><Link to="/about">Favourites</Link></li>
//     </ul>
//     </div>
//   );
// }
// });

// module.exports=NavBar;
import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';

class MenuExampleContentProp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  logoutCall() {
    $.ajax({
    url: 'http://localhost:8080/users/logout',
    type: 'GET',
    // datatype: 'JSON',
    // data:{username :this.state.username,password:this.state.password},
    success: function(res)
    {
      if (typeof res.redirect === 'string')
      window.location.replace(window.location.protocol + "//" 
        + window.location.host + res.redirect);
      console.log(res.responseText);
      // browserHistory.push('/');
    }.bind(this),

    error: function(err)
    {
      // alert("error occurred while logging out");
      console.log(err.responseText);
    }.bind(this)
  });
}

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
      <Link to = "/home">
        <Menu.Item
          name = 'Home'
          active={activeItem === 'Home'}
          content='Home'
          onClick={this.handleItemClick}
        />
		</Link>
		<Link to = "/about">
        <Menu.Item
          name = 'Favourites'
          active = {activeItem === 'Favourites'}
          content = 'Favourites'
          onClick = {this.handleItemClick}
        />
		</Link>
   <Menu.Item name = 'logout' active={activeItem === 'logout'}
    position = 'right' onClick = {this.logoutCall} />
    </Menu>
    );
  }
}

module.exports = MenuExampleContentProp;