import React, { Component } from 'react';

import Fixture from './Fixture';
import Submit from "./Submit";
import Summary from "./Summary";
import UpdateWinnings from "./UpdateWinnings";


class Matches extends Component {
	
	constructor(){
	    super();
	    
	    this.state = {
		    
	      selectedMatchOdds: [],
	      selections: [],
	      odds: 0,
	      	      
	    }  
	  }
	  
	  
	// UI functions to hide / display elements 

	// Display winnings widget at top of screen
	showPotentialWinnings() {
        var winnings = document.querySelector('.winnings').classList;
        winnings.add('active');      
    }
   
    // Remove winnings widget at top of screen
   	hidePotentialWinnings() {
	    var winnings = document.querySelector('.winnings').classList;
        winnings.remove('active'); 
    }
    
    // Display buttons once a selection has been made
    showSubmit() {
	   	var submit = document.querySelector('.submit').classList;
        submit.add('show'); 
    }
    
    // Remove buttons when selections cleared
    removeSubmit() {
	   	var submit = document.querySelector('.submit').classList;
        submit.remove('show'); 
    }
    
    
    
    /*
	    Make a copy of the state array, Update the selection based on the index of the match
	    and set the state with the new selection
	*/

    updateSelections (i, selection) {

	    let selections = this.state.selections.slice() 
		selections[i] = selection 
		this.setState({selections: selections}) 	  
    }
    
    /*
	    Make a copy of the state array, Update the potential winnings
	    and set the state
	*/
	
    updateOdds (winnings) {
	    let odds = this.state.odds 
		odds = winnings;
		this.setState({odds: odds})
    }
    
    
   /* Updates the selection and odds when a new selection is made or updated.
	  Assigns the selected value (odds) to the match
	  It then calculates the combined odds by multiplying all the values (odds) within the array using a callback function
	  Then updates the states
	*/

   update(i, val, selection) {
  
	  	let selectedMatches = this.state.selectedMatchOdds.slice() 
	  
	  	selectedMatches[i] = val; // Assign the selected value (odds) to that match
	  	this.setState({selectedMatchOdds: selectedMatches}) // Update the state

		let combinedOdds = selectedMatches.reduce ( 
		  	function(a, b){
			  	return a * b;
			  }
		); 
	  
	    let potential = parseFloat(combinedOdds); 
	    let winnings = potential.toFixed(2); 

	    this.updateOdds(winnings);
	    this.updateSelections(i, selection) 
	    this.showPotentialWinnings() // display winnings widget
	    this.showSubmit() // show submit + clear buttons
     
   }
   
   
   
   // Clears the selections by resetting state to initial values.
   
   clear() {
	   
	    let odds = this.state.odds.slice();
	    odds = 1;
		this.setState({odds: odds})
		
		let matches = this.state.selections.slice();
		matches = [];
	    this.setState({matches: matches})
	    
	    let selections = this.state.selections.slice();
	    selections = []
	    this.setState({selections: selections})
	    

        var elements = document.querySelectorAll('.selections .button'); // select all buttons within selection class
        
        var i;
			for (i = 0; i < elements.length; i++) {
				elements[i].style.backgroundColor = "#5a93b7"; // loops through elements and resets style
		} 
		
		this.hidePotentialWinnings();
		this.removeSubmit();
        
   }
   
   

	
  render() {
    let fixtures;
     
	    if(this.props.matches){
	
		  // Map through the matches array and assign to the Fixtures variable. 
	      fixtures = this.props.matches.map((matches, index) => {
		      
		    let i = index;
	
	        return (
	          <Fixture 
	          		match={matches} // Send the match info
	          		update={this.update.bind(this)} // Send update function to component as a prop
	          		i = {i} // Send the index to the fixture component to bind the selection to this fixture
	          		key={matches.id}
	        
	          /> 
	        );
	      });
	    }

    return (
      <div className="container">

      	 {fixtures}
      	 
	      	<div className="winnings">
	      	 	<UpdateWinnings 
	      	 		potential={this.state.odds} // If the odds state changes then send a new value to the Update Winning component
	      	 		close={this.hidePotentialWinnings} // Give child component access to function
	      	 	    
	      	 	/> 
	      	</div>
	      	<div className="submit">
	      		<Submit clear = {this.clear.bind(this)} />
	      	</div>
		  
	  		<Summary 
	  			selections={this.state.selections} 
	  			winnings={this.state.odds} 
	  			matches={this.props.matches} 
	  			matchodds={this.state.selectedMatchOdds}
	  			
	  			/>
	  			
	  		<div className="overlay"></div>
	  </div>
	  
  
    );
  }
}



export default Matches;