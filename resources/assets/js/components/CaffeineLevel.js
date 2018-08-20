import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class CaffeineLevel extends Component {
	render() {

		let classType = "safe";

		if (this.props.levels.length > 0)
		{
			for (let i = 0; i < this.props.levels.length; i++) {
              if (this.props.mg >= this.props.levels[i].milligrams && (i+1 == this.props.levels.length || this.props.mg < this.props.levels[i+1].milligrams))
              {
              	classType = this.props.levels[i].name;
              }
          	}
		}

		return <div className="contentDiv"><div className={classType}>{this.props.mg} - {classType}</div></div>;
	}
}

export default CaffeineLevel;