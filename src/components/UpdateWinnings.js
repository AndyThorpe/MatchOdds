import React, { Component } from 'react';
import CloseIMG from '../assets/images/close-white.png';


class UpdateWinnings extends Component {


   render() {  
	 	  
	  let stake = 1;
	  let currency = "€";
	  let chosenOdds = this.props.potential;	
	  let potentialWinnings = (stake * chosenOdds).toFixed(2);

	  
    return (

	     <div>
	     	<a className="close" onClick={this.props.close}><img src={CloseIMG} className="close-btn" alt="close"/></a>
	     	<h3 className="bold">A {currency}{stake} bet will win you {currency}{potentialWinnings}</h3>
	     </div>
      
    );
  }
}


export default UpdateWinnings;