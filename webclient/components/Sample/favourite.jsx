import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import DisplayComponent from './displayFavourite.jsx';
var imgStyle = {
  	height: '200px'
  }
  var textBoxStyle = {
  	height:'130px'
  }

  
class FavouriteComponent extends React.Component {
	constructor () {
		super();
		this.state = {json : []};		
	}

	GetRestaurant(){
   $.ajax({
    
		      url:"http://localhost:8080/restaurant/getRestaurant",
		      type:'GET', 
		     success: function(data)
		     {
		       console.log('Successfully got JSON from Zomato' + data);
		    	this.setState({json : data})
		    	console.log(data);
		     }.bind(this),
		     error: function(err)
		     {
		       console.log('error occurred on AJAX');
		       console.log(err);
		     }.bind(this)
       });
	}

	componentDidMount() {
		console.log("comes");
		this.GetRestaurant();
	}
	removeFavCard(id){
		var favArray = this.state.json;
    var arr=[];
    for(var obj of favArray){
      if(obj._id!=id){
        arr.push(obj);
      }
    }
    this.setState({json:arr});
	}
	
	render() {
		return (
					<DisplayComponent removeFav={this.removeFavCard.bind(this)} json= {this.state.json} />
				 	
		);
	}
}
module.exports = FavouriteComponent;