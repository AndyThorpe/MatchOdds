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
		  headers: { 'X-Auth-Token': this.token },
	      url: 'https://s3-eu-west-1.amazonaws.com/fa-ads/frontend/matches.json',
	      dataType:'json',
	      cache: false,
	      success: function(data){			

		    let m = data.matches;

	        this.setState({matches: m}, function(){});

	      }.bind(this),
	      error: function(xhr, status, err){
	        console.log(err);
	      }
	    });
	}


	  componentDidMount(){
	    this.getMatches();
	  }
	
	
	  render() {
	    return (
	         <div className="row" id="top">
			 	<Matches matches={this.state.matches} />
			 </div>
	    );
	  }
	}

export default App;
