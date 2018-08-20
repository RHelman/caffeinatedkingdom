import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CaffeineDrinkOption from './CaffeineDrinkOption';

class CaffeineDrinkSelect extends Component {
	render() 
	{
		let drinkOptions = [];

		for (let item of this.props.items) {
              drinkOptions.push(<CaffeineDrinkOption key={item.id} item={item}/>);
          }

		return <select className="form-control" onChange={ (e) => this.props.changeHandler(e.target.value) }  >{drinkOptions}</select>;
	}
}

export default CaffeineDrinkSelect;