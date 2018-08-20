import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CaffeineDrinkMenu from './CaffeineDrinkMenu';
import CaffeineState from './CaffeineState';

import './CaffeineApp.css';

class CaffeineTracker extends Component {

    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      availableDrinks: [],
      drank: [],
      caffeineLevels: [],
    };

    this.drankOne = this.drankOne.bind(this);
  }

  drankOne(item) {
    this.setState({drank: [...this.state.drank, item]});
  }

  componentDidMount() {

    $.ajax({
    url: 'http://localhost:8000/api/drinks',
    type: 'GET',
    data: {},
        success: function (data) {
            this.setState({
            error: null,
            isLoaded: true,
            availableDrinks: Array.from(data)
          });
        }.bind(this),
      error: function(xhr, status, err) { 

        this.setState({

            error: JSON.parse(xhr.responseText).error,
            isLoaded: true,
            availableDrinks: []
        });

      }.bind(this)
    });

    $.ajax({
    url: 'http://localhost:8000/api/caffeineLevels/',
    type: 'GET',
    data: {},
        success: function (data) {
            this.setState({
            caffeineLevels: Array.from(data)
          });
        }.bind(this),
      error: function(xhr, status, err) { 
        this.setState({

            error: JSON.parse(xhr.responseText).error,
            isLoaded: true,
            caffeineLevels: []
        });

      }.bind(this)
    });
  }

  render() 
  {
    const { error, isLoaded, availableDrinks } = this.state;
    if (error) 
    {
      return <div>Error: {error}</div>;
    } 
    else if (!isLoaded) 
    {
      return <div>Loading...</div>;
    } 
    else 
    {

      return (
        <div className="Row">
          <div className="col-md-4 form-group">
            <div className="form-group">
              <CaffeineDrinkMenu drinks={this.state.availableDrinks} drankOneHandler={this.drankOne} drank={this.state.drank}/>
            </div>
          </div>
 
          <div className="col-md-1 form-group"></div>
          <div className="col-md-7 form-group">
              <div className="form-group">
                <CaffeineState drank={this.state.drank} levels={this.state.caffeineLevels} drinks={this.state.availableDrinks}/>
              </div>
          </div>
        </div>
      );
    }
  }

  
}

export default CaffeineTracker;

if (document.getElementById('caffeineControl')) {
    ReactDOM.render(<CaffeineTracker />, document.getElementById('caffeineControl'));
}
