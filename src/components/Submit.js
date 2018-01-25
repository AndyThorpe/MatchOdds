import React, { Component } from 'react';


class Submit extends Component {

 	showSummary() {
	   
	   	var summary = document.querySelector('.summary').classList;
	   	var overlay = document.querySelector('.overlay').classList;
	   	
        summary.add('summarise'); 
        overlay.add('show'); 
        
    }
    

   render() {  

    return (

	     <div className="controls">
	     	<a href="#top" className="button" onClick={this.showSummary} >SUBMIT YOUR SELECTIONS</a>
	     	<a className="button" onClick={this.props.clear} >CLEAR</a>
	     </div>
      
    );
  }
}


export default Submit;