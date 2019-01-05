import React, { Component } from 'react';
import './App.css';
import Stars from './Stars.js'
import logo from './logov2.png'
import { Button } from 'react-bootstrap';



class App extends Component {


  constructor() {
    super();

    this.state = {
      rating: 1,
      voted: false
    };
    this.onStarClick = this.onStarClick.bind(this);
    this.submitRating = this.submitRating.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
  submitRating() {
    this.setState({voted: true})
  }
  render() {
    const rating = this.state.rating;
    const voted = this.state.voted;
    if (voted === true) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Thanks for voting!
            </p>
            <Stars value={rating} />
          </header>

        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Please rate today's food!
            </p>
            <Stars value={rating} onClick={this.onStarClick}/>
            <Button bsStyle="primary" bsSize="large" onClick={this.submitRating} className="voteButton">
              Vote!
            </Button>
          </header>

        </div>
      );
    }

  }
}

export default App;
