import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CaffeineLabel from './CaffeineLabel';
import CaffeineLevel from './CaffeineLevel';
import CaffeineCanStillDrink from './CaffeineCanStillDrink';


class CaffeineState extends Component {

	constructor(props) {
    	super(props);
    	this.state = {

    	};

    	this.calculateCurrentCaffeineLevel = this.calculateCurrentCaffeineLevel.bind(this);
   	}

	calculateCurrentCaffeineLevel() {
    	let total = 0;
    	for (let drink of this.props.drank) {
      		total += drink.mg_of_caffeine_per_serving * drink.servings_per;
    	}

    	return total;
  	}

	render() 
	{
		return (
			<div className="form-group">
				<CaffeineLabel text="Caffeine Levels" />
				<CaffeineLevel mg={this.calculateCurrentCaffeineLevel()} levels={this.props.levels}/>

				<CaffeineLabel text="Still Safe To Consume" />
				<CaffeineCanStillDrink mg={this.calculateCurrentCaffeineLevel()} levels={this.props.levels} drinks={this.props.drinks} />

				
			</div>
			);
	}
}

export default CaffeineState;