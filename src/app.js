import React, { Component } from 'react';
import Matches from './components/Matches';
import $ from 'jquery';


class App extends Component {

	 constructor(){
	    super();
	    this.state = {
	      matches:[],
	    } 
	  }
  

	 getMatches(){

	   $.ajax({
	      url: 'https://s3-eu-west-1.amazonaws.com/fa-ads/frontend/matches.json',
	      dataType:'json',
	      cache: false,
	      success: function(data){			

		    let m = data.matches; // Access the matches object

	        this.setState({matches: m}, function(){}); // Send it to state

	      }.bind(this),
	      error: function(err){
	        console.log(err);
	      }
	    });
	}


	  componentDidMount(){
	    this.getMatches(); // Lifecycle method to mount the matches function
	  }
	
	
	  render() {
	    return (
	         <div className="row">
			 	<Matches matches={this.state.matches} /> 
			 </div>
	    );
	  }
	}

export default App;
