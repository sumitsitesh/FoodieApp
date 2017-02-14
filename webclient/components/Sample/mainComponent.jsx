import Child from'./index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {
	constructor () {
		super();	
		this.state = {obj : []};
	}
	
	getResturantDataFromZomato (cityId,cusine)
 {
  
   $.ajax({
    
      url:"https://developers.zomato.com/api/v2.1/search?entity_id="+cityId+"&entity_type=city&q="+cusine+"&count=10",
      type:'GET',
      beforeSend: function (request)
 
                  {
                      request.setRequestHeader("user-key", "9351c23066e0ae833d7602c214e1ae98");
                  },
     success: function(data)
     {
       console.log('Successfully got JSON from Zomato' + data);
    	this.setState({obj:data.restaurants});
    	// console.log(obj);
     }.bind(this),
     error: function(err)
     {
       console.log('error occurred on AJAX');
       console.log(err);
     }.bind(this)
    });
   
}
	
	render() {

		return (
			<div>
				
				<Child.Child handle = {this.getResturantDataFromZomato.bind(this)}/>
				<Child.Child1 obj = {this.state.obj}/>
						
			</div>
		);
	}
}
module.exports = MainComponent;
ReactDOM.render(	
	<MainComponent/>,document.getElementById('mountapp')
);
