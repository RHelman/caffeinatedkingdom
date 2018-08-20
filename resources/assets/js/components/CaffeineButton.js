import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CaffeineButton extends Component {
	render() {
		return <button onClick={() => this.props.clickHandler()}>{this.props.text}</button>;
	}
}

export default CaffeineButton;