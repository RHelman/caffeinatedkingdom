import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CaffeineDrinkListItem extends Component {
	render()
	{
		return <div className="listItem">{this.props.item.name}</div>;
	}
}

export default CaffeineDrinkListItem;