import React from 'react';

const { Component } = React;
class Countdisplay extends Component {
	render() {
    const { count } = this.props;
    return (
      		<div>
        		item: {count}
      		</div>
    	);
  	}

}

module.exports = Countdisplay;