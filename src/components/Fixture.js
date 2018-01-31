import React, { Component } from 'react';


class Fixture extends Component {

	constructor(){
	    super();
	    this.state = {
		    
	      matchOdds:[] 	 // set the state for selected odds on this specific fixture

	    }  
    
	  }
	  

	    selection (e) {
		    
		  const selected = "#090f42";
		  const unselected = "#5a93b7";
		  let i = this.props.i;
		  let selection = e.target.getAttribute('data-ref');
	   	  let val = e.target.getAttribute('data-odds');
	   	  

	   	  this.setState({matchOdds: val}, function(){}); // Set the Match Odds state for this fixture

	   	  this.props.update(i, val, selection); // Call update function in matches to update the selection

		  // Switch statement to display users selection with background color
		  		  
	   	  switch(selection) { 
		    case "HOME WIN":
		        	this.refs.home.style.backgroundColor = selected;
					this.refs.away.style.backgroundColor = unselected;
					this.refs.draw.style.backgroundColor = unselected;
		        break;
		    case "DRAW":
		        	this.refs.home.style.backgroundColor = unselected;
					this.refs.away.style.backgroundColor = unselected;
					this.refs.draw.style.backgroundColor = selected;
		        break;
		    case "AWAY WIN":
		        	this.refs.home.style.backgroundColor = unselected;
					this.refs.away.style.backgroundColor = selected;
					this.refs.draw.style.backgroundColor = unselected;
		        break;    
		        
		    default:
		        
		} 
	  }


    render() {  
	    
	    const home = "HOME: " + this.props.match.odds[1];
	    const draw = "DRAW: " + this.props.match.odds['x'];
	    const away = "AWAY: " + this.props.match.odds[2];
		 	 	  
	    return (
	
		     
	      <div className="match small-12 columns">
	       
	        <h2>{this.props.match.homeTeam} - {this.props.match.awayTeam}</h2>
	        <h3>{this.props.match.kickoff}</h3>
	         
			 <div className="selections">
			 	<input type="button" data-ref="HOME WIN" ref="home" className="button" onClick={this.selection.bind(this)} value={home} data-odds={this.props.match.odds[1]} />
			 	<input type="button" data-ref="DRAW" ref="draw" className="button" onClick={this.selection.bind(this)} value={draw} data-odds={this.props.match.odds['x']} /> 
			 	<input type="button" data-ref="AWAY WIN" ref="away" className="button" onClick={this.selection.bind(this)} value={away} data-odds={this.props.match.odds[2]} />
			 </div>

	      </div>
	
	    );
	  }
}


export default Fixture;