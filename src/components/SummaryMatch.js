import React, { Component } from 'react';

class SummaryMatch extends Component {

    render() {  
 	 	  
	    return (
    
	      <div className="match small-12 columns">
	       
	        <h2>{this.props.match.homeTeam} - {this.props.match.awayTeam}</h2>
	        <h3>{this.props.match.kickoff}</h3>
	        <h3>You Selected: <strong>{this.props.selection}</strong> at odds of {this.props.odds} <a onClick={this.props.edit}> | Edit </a></h3>

	      </div>
	
	    );
	  }
}


export default SummaryMatch;