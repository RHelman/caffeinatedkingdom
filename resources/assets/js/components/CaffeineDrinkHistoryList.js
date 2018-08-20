import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CaffeineDrinkListItem from './CaffeineDrinkListItem';

class CaffeineDrinkHistoryList extends Component {
	render() 
	{
		let drinkHistory = [];

		for (let item of this.props.drinks) {
              drinkHistory.push(<CaffeineDrinkListItem key={Math.random().toString(36).substr(2, 16)} item={item}/>);
          }

		return <div className="contentDiv">{drinkHistory}</div>;
	}
}

export default CaffeineDrinkHistoryList;