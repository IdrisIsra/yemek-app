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
    this.onSubmitRating = this.onSubmitRating.bind(this);
  }
  submitRating() {
    this.setState({voted: true});
  }
  onSubmitRating() {
    this.submitRating();
    fetch('http://localhost:3000/', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        rating: this.state.rating
      })
    })
 }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
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
            <Button bsStyle="success" bsSize="large" onClick={this.onSubmitRating} className="voteButton">
              Vote!
            </Button>
          </header>

        </div>
      );
    }

  }
}

export default App;
