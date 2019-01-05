import React, { Component } from 'react';
import './App.css';
import Stars from './Stars.js'



class App extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
  render() {
    const rating = this.state.rating;
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://cdn.shopify.com/s/files/1/2202/6063/files/PNGMedium_4988d1ff-6d33-4d53-b552-c46c18ffc083_410x.png?v=1502258320" className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React idrisv2
          </a>
          <Stars value={rating} onClick={this.onStarClick}/>
        </header>

      </div>
    );
  }
}

export default App;
