import React, { Component } from 'react';

import Fixture from './Fixture';
import Submit from "./Submit";
import Summary from "./Summary";
import UpdateWinnings from "./UpdateWinnings";


class Matches extends Component {
	
	constructor(){
	    super();
	    
	    this.state = {
		    
	      matches: [],
	      selections: [],
	      odds: 0,
	      	      
	    }  
	  }
	  
	  
	// UI functions to hide / display elements 

	showPotentialWinnings() {
        var winnings = document.querySelector('.winnings').classList;
        winnings.add('active');      
    }
   
   	hidePotentialWinnings() {
	    var winnings = document.querySelector('.winnings').classList;
        winnings.remove('active'); 
    }
    
    showSubmit() {
	   	var submit = document.querySelector('.submit').classList;
        submit.add('show'); 
    }
    
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
    
    
   /* Updates the selection and odds when a new selection is made or changed.
	  Assigns the selected value (odds) to the index of the match
	  Then calculates the combined odds by multiplying all the values (odds) within the array using a callback function
	  Then updates the states
	*/

   update(i, val, selection) {
  
	  	let selectedMatches = this.state.matches.slice() 
	  
	  	selectedMatches[i] = val; // Assign the selected value (odds) to the index of that match
	  	this.setState({matches: selectedMatches}) // Update the state

		let combinedOdds = selectedMatches.reduce ( 
		  	function(a, b){
			  	return a * b;
			  }
		); 
	  
	    let potential = parseFloat(combinedOdds); 
	    let winnings = potential.toFixed(2); 

	    this.updateOdds(winnings);
	    this.updateSelections(i, selection) 
	    this.showPotentialWinnings() 
	    this.showSubmit() 
     
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
	          		key={matches.id}  
	          		i = {i} // Send the index to the fixture component to bind the selection to this fixture
	        
	          /> 
	        );
	      });
	    }

    return (
      <div className="container">

      	 {fixtures}
      	 
	      	<div className="winnings">
	      	 	<UpdateWinnings 
	      	 		potential={this.state.odds} 
	      	 		close={this.hidePotentialWinnings}
	      	 	    
	      	 	/> 
	      	</div>
	      	<div className="submit">
	      		<Submit clear = {this.clear.bind(this)} />
	      	</div>
		  
	  		<Summary 
	  			selections={this.state.selections} 
	  			winnings={this.state.odds} 
	  			matches={this.props.matches} 
	  			matchodds={this.state.matches}
	  			
	  			/>
	  			
	  		<div className="overlay"></div>
	  </div>
	  
  
    );
  }
}



export default Matches;