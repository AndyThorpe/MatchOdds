import React, { Component } from 'react';


class Submit extends Component {

 	showSummary() {
	   
	   	var summary = document.querySelector('.summary').classList;
	   	var overlay = document.querySelector('.overlay').classList;
	   	var body = document.querySelector('body').classList;
	   	
        summary.add('summarise'); 
        overlay.add('show'); 
        body.add('disablescroll');    
        
    }
    

   render() {  

    return (

	     <div className="controls">
	     	<a className="button" onClick={this.showSummary} >SUBMIT YOUR SELECTIONS</a>
	     	<a className="button" onClick={this.props.clear} >CLEAR</a>
	     </div>
      
    );
  }
}


export default Submit;