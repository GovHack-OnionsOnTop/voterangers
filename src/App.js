
import React, { Component } from 'react';
import logo from './logo.svg';
import MapWithStops from './MapWithStops';
import * as _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1, 
      title: 'Plan your vote',
      type: 'gmaps'
    };
    this.gmapsSelected = this.gmapsSelected.bind(this);
  }

  gmapsSelected() {
    this.setState({
      selected: 5,
      title: 'Plan your vote',
      type: 'gmaps'
    });
  }

  render() {
    let content;
    if (this.state.type === 'gmaps') {
      content = <MapWithStops />;
    }

    return (
      <div className="App">
        <div className="App-header">
          <p src={logo} className="App-logo" alt="logo">Plan your vote</p>
        </div>
        <div className="container">
          {content}
        </div>
      </div>
    );
  }
}

export default App;
