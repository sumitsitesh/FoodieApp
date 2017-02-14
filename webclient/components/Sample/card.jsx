import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Button, Input } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
  var imgStyle = {
  	height: '180px'
  }
  var textBoxStyle = {
  	height:'170px'
  }
class Child2Component extends React.Component {
	constructor () {
		super();		
		this.state = { comment : "comments" };
	}
   
   handleUpdateChange(e){
   this.UpdateRestaurant(e);
   }
	AddRestaurant(){
   $.ajax({
    
		      url:"http://localhost:8080/restaurant/addRestaurant",
		      type:'POST',
		      data:{"resId" : this.props.id,"Images":this.props.image,"resName" : this.props.name,"location" : this.props.location,
					"locality":this.props.locality,"cusines":this.props.cusines,"ratings":this.props.rating, "comment":""},
    
  
		      
		     success: function(data)
		     {
		       console.log('Successfully got JSON from Zomato' + data);
		    
		    	console.log(data);
		     }.bind(this),
		     error: function(err)
		     {
		       console.log('error occurred on AJAX');
		       console.log(err);
		     }.bind(this)
       });
	}

	DeleteRestaurant() {
		console.log("delete");
		$.ajax({
    
		      url:"http://localhost:8080/restaurant/deleteRestaurant",
		      type:'DELETE',
		      data:{"resId" : this.props.id},
		      
		     success: function(data)
		     {
		       console.log('Successfully got JSON from Zomato' + data);
		    
		    	console.log(data);
		    	this.props.remove(this.props.dbid);
		     }.bind(this),
		     error: function(err)
		     {
		       console.log('error occurred on AJAX');
		       console.log(err);
		     }.bind(this)
       });

	}
	componentDidMount(){
		this.setState({
			comment : this.props.comments
		});
	}
	UpdateRestaurant(e) {
		// console.log("updated");
		$.ajax({
    
		      url:"http://localhost:8080/restaurant/updateRestaurant",
		      type:'PUT',
		      data:{"resId" : this.props.id, "comments" : e.target.value},
    
  
		      
		     success: function(data)
		     {
		       console.log('Successfully got JSON from Zomato' + data);
		    
		    	console.log(data);
		     }.bind(this),
		     error: function(err)
		     {
		       console.log('error occurred on AJAX');
		       console.log(err);
		     }.bind(this)
       });

	}
	
	render() {
		var but = "";
		if(this.props.fav === "fav"){
			but = (
				
				<div>
				
				<Input fluid  color='teal' placeholder = {this.state.comment}  onChange={this.handleUpdateChange.bind(this)} />
				<Button fluid color='teal' length='full' onClick={this.DeleteRestaurant.bind(this)}>Delete</Button>
				</div>

				);
		}
		else {
			but = (
				<Button fluid color='blue' floated = "right" onClick={this.AddRestaurant.bind(this)}>Add to Favourites</Button>
				);
		}
		console.log("image:"+this.props.image);
		return (
					<Card>
				    <Image style={imgStyle} src={this.props.image} />
				    <Card.Content style={textBoxStyle}>
				      <Card.Header>
				        {this.props.name}
				        {this.props.id}
				      </Card.Header>
				      <Card.Meta>
				        <span className='date'>
				     {this.props.location}

				         
				        </span>
				      </Card.Meta>
				      <Card.Description>
				        {this.props.locality}
				      </Card.Description>
				      <a>
				      {this.props.cusines}
				      </a>
				      <Card.Description>
				      <a>
				      <Icon name='user' rating />
				        {this.props.rating}
				        </a>
				       </Card.Description>

				    </Card.Content>
				    <Card.Content extra>
				      <a>
				        
				         {but}
				      </a>
				    </Card.Content>
				    

				  </Card>
				 	
		);
	}
}
module.exports = Child2Component;