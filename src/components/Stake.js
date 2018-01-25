import React, { Component } from 'react';


class Stake extends Component {
    
    handleChange(e) {
	    const stake = e.target.value
	    
	    if (stake) {
	   		this.props.changeStake(stake);
	   	} else {
		   	this.props.changeStake(1);
	   	}
    }
    

   render() {  

    return (

	     <div className="stake">
	     	<div className="stake-input">
 	     		<p>Change your stake?
 		 			 <select name="cars" onChange={this.handleChange.bind(this)}>
					  	<option value="1">€1</option>
					  	<option value="5">€5</option>
					  	<option value="10">€10</option>
					  	<option value="50">€50</option>
					  	<option value="100">€100</option>
					  	<option value="500">€500</option>
					 </select> 

 		 		</p>
	     	
	     	</div>
	     </div>
      
    );
  }
}


export default Stake;