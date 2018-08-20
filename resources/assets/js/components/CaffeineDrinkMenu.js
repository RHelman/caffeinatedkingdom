import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CaffeineDrinkSelect from './CaffeineDrinkSelect';
import CaffeineLabel from './CaffeineLabel';
import CaffeineButton from './CaffeineButton';
import CaffeineDrinkHistoryList from './CaffeineDrinkHistoryList';

class CaffeineDrinkMenu extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      selected: this.props.drinks[0].id,
	    };

	    this.handleSelectChange = this.handleSelectChange.bind(this);
	    this.drankButtonClick = this.drankButtonClick.bind(this);
	}

	handleSelectChange(selection) {
		this.setState({selected: selection});
	}

	drankButtonClick() {
		for (let drink of this.props.drinks) {
	          if (drink.id == this.state.selected)
	          {
	          	this.props.drankOneHandler(drink);
	          	break;
	          }
	      }
	}

	render() 
	{

		return (
			<div className="form-group">
				<CaffeineLabel text="Drink Menu" />
				<CaffeineDrinkSelect items={this.props.drinks} changeHandler={this.handleSelectChange}/>
				<CaffeineButton text="Drank One" clickHandler={this.drankButtonClick}/>

				<CaffeineLabel text="Drink History" />
				<CaffeineDrinkHistoryList drinks={this.props.drank} />
			</div>
			);
	}
}

export default CaffeineDrinkMenu;