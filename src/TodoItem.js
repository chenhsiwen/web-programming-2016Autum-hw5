import React from 'react';

const { Component } = React;

class TodoItem extends Component {
   render() {
    const { index, title, isCompleted, onChange } = this.props;
    return (
      		<li>
        		<div className="view">
			         <input
			            className="toggle"
			            type="checkbox"
			            checked={isCompleted}
			            onChange={(event) => onChange(event, index)}
			         />
         		 	<label>{title}</label>
        		</div>
      		</li>
    	);
  	}
}


module.exports = TodoItem;