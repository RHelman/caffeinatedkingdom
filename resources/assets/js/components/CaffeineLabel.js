import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CaffeineLabel extends Component {
	render() {
		return <h2>{this.props.text}</h2>;
	}
}

export default CaffeineLabel;