import React, { Component } from "react";
import "./App.css";
import Stars from "./Stars.js";
import logo from "./logov2.png";
import { Button } from "react-bootstrap";
import { API } from "aws-amplify";

class App extends Component {
  constructor() {
    super();
    this.state = {
      rating: 1,
      voted: false,
      name: "",
      isLoading: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  handleSubmit = async event => {
    event.preventDefault();

    // if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
    //   alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
    //   return;
    // }

    this.setState({ isLoading: true });

    try {
      await this.createNote({
        rating: this.state.rating,
        name: this.state.name
      });
      this.setState({ voted: true });
      //this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  };

  createNote(note) {
    return API.post("votes", "/votes", {
      body: note
    });
  }

  //  onSubmitRating(name) {

  //    console.log(this.state.name);
  //    fetch('http://localhost:3000/', {
  //      method: 'post',
  //      headers: {'Content-Type': 'application/json'},
  //      body: JSON.stringify({
  //        rating: this.state.rating,
  //        name: this.state.name
  //      })
  //    })
  // }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };
  render() {
    const rating = this.state.rating;
    const voted = this.state.voted;
    if (voted === true) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Thanks for voting! {this.state.name} </p>
            <Stars value={rating} />
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Please rate today's food!</p>
            <p className="adYaz">Lütfen adınızı yazınız:</p>
            <form>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </form>
            <Stars value={rating} onClick={this.onStarClick} />
            <Button
              bsStyle="success"
              bsSize="large"
              onClick={this.handleSubmit}
              className="voteButton"
            >
              Vote!
            </Button>
          </header>
        </div>
      );
    }
  }
}

export default App;
