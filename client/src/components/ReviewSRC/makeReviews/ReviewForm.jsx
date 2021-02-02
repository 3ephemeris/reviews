import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { ModalStyles } from '../StyledComponents/ModalStyles';
import FadeIn from '../animations/FadeIn';
import RatingStars from '../animations/RatingStars';
import ReviewBody from './ReviewBody';
import UserInfo from './UserInfo';

const propTypes = {
  changeView: PropTypes.func.isRequired,
  imgUrl: PropTypes.string,
  productName: PropTypes.string,
};
const defaultProps = {
  imgUrl: 'missing',
  productName: 'missing',
};

const ReviewForm = (props) => {
  const handleRecommended = (event) => {
    event.preventDefault();
    $(event.target).toggleClass('selected');
  };

  // Props
  const { changeView, imgUrl, productName } = props;
  // Styling
  const {
    ReviewContainers,
    ReviewContent,
  } = ModalStyles;
  // Page and containers
  const {
    ModalContainer,
    Overlay,
    ExitButtonContainer,
    WriteReviewsContainer,
    ProductInfoContainer,
    OverallRatingContainer,
  } = ReviewContainers;
  // Content
  const {
    ExitButton,
    H1,
    H3,
    H4,
    Img,
    ActivityButton,
  } = ReviewContent;

  return (
    <FadeIn delay={250} duration={300}>
      <ModalContainer>
        <Overlay onClick={() => changeView(null)} />
        <ExitButtonContainer>
          <ExitButton onClick={() => changeView(null)}>
            <u>Close (x)</u>
          </ExitButton>
        </ExitButtonContainer>
        <WriteReviewsContainer>
          <ProductInfoContainer>
            <H1>Write your Review</H1>
            <H3>{productName}</H3>
            <Img src={imgUrl} />
            <H4>Product image color may not be shown in color purchased</H4>
            <UserInfo />
            <OverallRatingContainer>
              <div>
                <H1>Overall Rating:</H1>
                <RatingStars />
              </div>
              <div>
                <H1>Likely to recommend?</H1>
                <div>
                  <ActivityButton onClick={handleRecommended}>Yes</ActivityButton>
                  <ActivityButton onClick={handleRecommended}>No</ActivityButton>
                </div>
              </div>
            </OverallRatingContainer>
          </ProductInfoContainer>
          <ProductInfoContainer>
            <ReviewBody changeView={changeView} />
          </ProductInfoContainer>
        </WriteReviewsContainer>
      </ModalContainer>
    </FadeIn>
  );
};

ReviewForm.propTypes = propTypes;
ReviewForm.defaultProps = defaultProps;
export default ReviewForm;
