import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import Child2 from './Card.jsx';

class Child1Component extends React.Component {
	constructor () {
		super();		
	}
	
	render() {
		var divStyle={
			margin :'70px'
		}

		 var x =this.props.obj;
		 console.log(x);
		 var resName = x.map(function(obj){
		 	return (
		 	
		 			<Child2  id={obj.restaurant.id} image={obj.restaurant.featured_image} name={obj.restaurant.name} location={obj.restaurant.location.address}
		 			locality={obj.restaurant.location.locality} cusines={obj.restaurant.cuisines} rating = {obj.restaurant.user_rating.aggregate_rating}/>

		 	);
		 });
		return (
			<div style = {divStyle}><Card.Group itemsPerRow={4}>
			{resName}

			</Card.Group></div>
		);
	}
}
module.exports = Child1Component;