import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Stars extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { value, onClick} = this.props
    return (
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={10}
          value={value}
          onStarClick= {onClick}
        />
      </div>
    );
  }
}

export default Stars;
