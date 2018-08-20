import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CaffeineDrinkListItem from './CaffeineDrinkListItem';

class CaffeineCanStillDrink extends Component {
	render() {
		
		if (this.props.levels && this.props.levels.length > 0)
		{

			let maxAllowable = this.props.levels[this.props.levels.length - 1].milligrams - this.props.mg;

			let allowable = [];

			for (let item of this.props.drinks) {
				if ((item.mg_of_caffeine_per_serving * item.servings_per) < maxAllowable)
				{
					allowable.push(<CaffeineDrinkListItem key={Math.random().toString(36).substr(2, 16)} item={item}/>);
				}
          	}

          	if (allowable.length == 0)
          	{
          		return <div className='danger contentDiv'>Maximum Level: No More Caffeine</div>;
          	}

			return <div className="contentDiv">{allowable}</div>;
		}
		else
		{
			return <div></div>;
		}
		
	}
}

export default CaffeineCanStillDrink;
