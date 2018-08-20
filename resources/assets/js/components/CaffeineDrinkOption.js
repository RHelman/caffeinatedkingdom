import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class CaffeineDrinkOption extends Component {
	render() 
	{
		return <option value={this.props.item.id}>{this.props.item.name} ({this.props.item.mg_of_caffeine_per_serving}mg)</option>;
	}
}

export default CaffeineDrinkOption;