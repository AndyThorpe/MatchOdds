import React, { Component } from 'react';
import SummaryMatch from './SummaryMatch';
import Stake from "./Stake";

import CloseIMG from '../assets/images/close-blue.png';


class Summary extends Component {
	
	
	constructor(){
	    super();
	    
	    this.state = {
		    
	      stake: 1 
	      	      
	    }  
	  }

    hideSummary() {
	   
	   	var summary = document.querySelector('.summary').classList;
	   	var overlay = document.querySelector('.overlay').classList;
	   	
        summary.remove('summarise'); 
        overlay.remove('show'); 
        
    } 
    
    changeStake(stake) {
	    this.setState({stake: stake})  
    }

   render() {  
	  
	  let matchodds = this.props.matchodds; // Array of selected odds
	  let selections = this.props.selections; // Array of selections
	  let odds = this.props.winnings; // total combined winnings
	  let stake = this.state.stake;
	  let winnings = (stake * odds).toFixed(2);
	  let s = parseFloat(stake); 
	   
	  let formattedStake = s.toFixed(2); // format to 2DP
	  
	  let formattedWinnings = winnings.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // format larger numbers with a comma

	  let currency = "€";
	  let fixtures;

	  // If selections were made, map through the matches array to display in Summary page
	  
	  if (selections) { // if selections have been made
		  
		  fixtures = this.props.matches.map((matches, index) => {   
		    let i = index;
			
			// Only display the match in the summary screen if a selection was made on that match
			
			if (selections[i]) {
		        return (
		          <SummaryMatch 
		          	match={matches} 
		          	i={i} 
		          	selection={selections[i]} 
		          	odds={matchodds[i]} 
		          	edit={this.hideSummary}
		          	key={index}
		          />
		        );
		     } else {
			     return "";
		     }
	      });
		  
	  }

    return (
	     <div className="summary row">
	     	<div className="container">
	     	    
	     	    <a className="close" onClick={this.hideSummary}><img src={CloseIMG} className="close-btn" alt="close"/></a>   	
	     	    	
	     		<h1>Bet {currency}{formattedStake} on your prediction and win <strong>{currency}{formattedWinnings}!</strong></h1>
	     		
	     		<h3 className="margintop-30">Review your selections</h3>
		 		
		 		{fixtures}
		 		
		 		<Stake changeStake={this.changeStake.bind(this)}/>

		 	</div>
	     </div>	   
      
    );
  }
}


export default Summary;