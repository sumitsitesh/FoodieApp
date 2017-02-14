import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Input, Grid} from 'semantic-ui-react';
class ChildComponent extends React.Component {
	constructor () {
		super();
		this.state = {city:"",cusine:""}		
	}

	handleCityChange(e){
		this.setState({city:e.target.value})
	}
	handleCusineChange(e){
		this.setState({cusine:e.target.value})
	}
	handleSearch(){
		// console.log(document.getElementById("restaurant").value);
		{this.props.handle (this.state.city,this.state.cusine)};
	}

	
	render() {

	var divStyle={
			margin :'-70px'
		}
		return (
			<Grid centered style= {divStyle}>
			      <Input onChange={this.handleCityChange.bind(this)} value={this.state.city} placeholder="cityName"/>
			      <Input onChange={this.handleCusineChange.bind(this)} value = {this.state.cusine} placeholder="cuisine"/>
				<Button color='blue' onClick={this.handleSearch.bind(this)}>Search Btn</Button>
						
			</Grid>
			
		);
	}
}
module.exports = ChildComponent;
