/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
import React from 'react';
import { ModalStyles } from '../StyledComponents/ModalStyles';

const { ReviewContainers, ReviewContent } = ModalStyles;
const { Div } = ReviewContainers;
const { Stars } = ReviewContent;
class RatingStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      hoverRating: 0,
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onSaveRating = this.onSaveRating.bind(this);
  }

  componentDidMount() {
    this.onMouseLeave();
  }

  onMouseEnter(index) {
    this.setState({
      hoverRating: index,
    });
  }

  onMouseLeave() {
    this.setState({
      hoverRating: 0,
    });
  }

  onSaveRating(index) {
    this.setState({
      rating: index,
    });
  }

  render() {
    const { rating, hoverRating } = this.state;
    return (
      <Div id="star-icons">
        {[1, 2, 3, 4, 5].map((index) => (
          <RatingStar
            index={index}
            key={index}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onSaveRating={this.onSaveRating}
          />
        ))}
      </Div>
    );
  }
}

const RatingStar = (props) => {
  const {
    rating, hoverRating, index, onMouseLeave, onMouseEnter, onSaveRating,
  } = props;

  const StarIcon = () => {
    if (hoverRating >= index) {
      return <Stars>★</Stars>;
    } else if (!hoverRating && rating >= index) {
      return <Stars>★</Stars>;
    } else {
      return <Stars>☆</Stars>;
    }
  };

  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      {StarIcon()}
    </div>
  );
};

export default RatingStars;
