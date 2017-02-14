var React = require('react');
import { Input,Button} from 'semantic-ui-react';

var {browserHistory} = require('react-router');
class  Login extends React.Component{
constructor()
{  super();
  this.state = {username:'',password:'', isLoggedIn:''};
}
handleUserName(e)
{
  this.setState({username:e.target.value});
}
handlePassword(e)
{
  this.setState({password:e.target.value});
}
LoginUser()
{
  $.ajax({
    url:"http://localhost:8080/users/login",
    type: 'POST',
    datatype: 'JSON',
    data:this.state,
    success: function(res)
    {
      console.log(res.responseText);
      browserHistory.push('/home');
    }.bind(this),
    error: function(err)
    {
      alert("Invalid username or password");
      console.log(err.responseText);
    }.bind(this)
  });
}

  render(){
    return(
    <div className="Login">
         <h2 className="text-center">Login</h2>
         <div className="form-group">
         <Input className="form-control" onChange={this.handleUserName.bind(this)}  placeholder="Enter a User Name..."  type="text" />
         </div>
         <div className="form-group">
         <Input className="form-control" onChange={this.handlePassword.bind(this)}  placeholder="Enter a Password..."  type="password" />
         </div>
         <div className="buttonLogin">
         <Button fluid color="blue" className="buttonLogin" onClick={this.LoginUser.bind(this)} type="submit" >Login</Button>
          </div>
    </div>


   );
  }
}

module.exports=Login;