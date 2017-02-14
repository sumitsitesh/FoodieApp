import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import Child2 from './card.jsx';

class DisplayComponent extends React.Component {
	constructor () {
		super();		
	}
	
	render() {
		var divStyle={
			margin :'1px'
		}

		 var x =(this.props.json);
		 var z = (this.props.removeFav);
		 var saveRes = x.map(function(item){
		 	return (
		 	
		 			<Child2  dbid={item._id} id={item.resId} image={item.Images} name={item.resName} location={item.location}
		 			locality={item.locality} cusines={item.cusines} rating = {item.ratings} fav = "fav" comments = {item.comments} remove= {z}/>

		 	);
		 });
		return (
			<div style = {divStyle}><Card.Group itemsPerRow={4}>
			{saveRes}
      	
			</Card.Group></div>
		);
	}
}
module.exports = DisplayComponent;