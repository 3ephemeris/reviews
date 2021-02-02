import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { ModalStyles } from '../StyledComponents/ModalStyles';

const propTypes = {
  changeView: PropTypes.func.isRequired,
};

class ReviewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activites: [],
    };
    this.handleUses = this.handleUses.bind(this);
  }

  handleUses(event) {
    const { activites } = this.state;
    const activityArr = activites;
    event.preventDefault();
    $(event.target).toggleClass('selected');
    if (event.target.className.includes('selected')) {
      activityArr.push(event.target.value);
    } else {
      const index = activityArr.indexOf(event.target.value);
      activityArr.splice(index, 1);
    }
    this.setState({
      activites: activityArr,
    });
  }

  render() {
    // Props
    const { changeView } = this.props;
    // Styles
    const {
      ReviewContainers,
      ReviewContent,
    } = ModalStyles;
    // Page and containers
    const {
      Form,
      UsesAndSizeContainer,
      Div,
      ReviewBodyContainer,
    } = ReviewContainers;
    const {
      H3,
      H4,
      Input,
      ActivityButton,
      Select,
      Option,
      PlaceHolderOption,
      TextArea,
      SubmitReview,
    } = ReviewContent;

    return (
      <Form>
        <br />
        <H3>This product is best used for:</H3>
        <UsesAndSizeContainer>
          <Div>
            <ActivityButton type="option" value="Casual-Wear" onClick={this.handleUses}>Casual-Wear</ActivityButton>
            <ActivityButton type="option" value="Climbing" onClick={this.handleUses}>Climbing</ActivityButton>
            <ActivityButton type="option" value="Hiking" onClick={this.handleUses}>Hiking</ActivityButton>
          </Div>
          <Select type="option" name="Size">
            <PlaceHolderOption name="placeholder" value="null">Select the size you purchased</PlaceHolderOption>
            <Option name="XS" value="XS">XS</Option>
            <Option name="S" value="S">S</Option>
            <Option name="M" value="M">M</Option>
            <Option name="L" value="L">L</Option>
            <Option name="XL" value="XL">XL</Option>
          </Select>
        </UsesAndSizeContainer>
        <UsesAndSizeContainer>
          <Div>
            <ActivityButton type="option" value="Yoga" onClick={this.handleUses}>Yoga</ActivityButton>
            <ActivityButton type="option" value="Running" onClick={this.handleUses}>Running</ActivityButton>
            <ActivityButton type="option" value="Biking" onClick={this.handleUses}>Biking</ActivityButton>
          </Div>
          <Select type="option" name="Height">
            <PlaceHolderOption name="placeholder" value="null">Select your height</PlaceHolderOption>
            <Option name="tall" value="Tall">Tall</Option>
            <Option name="average" value="Average">Average</Option>
            <Option name="short" value="Short">Short</Option>
          </Select>
        </UsesAndSizeContainer>
        <UsesAndSizeContainer>
          <Div>
            <ActivityButton type="option" value="Ski/Snow" onClick={this.handleUses}>Ski/Snow</ActivityButton>
            <ActivityButton type="option" value="Surfing" onClick={this.handleUses}>Surfing</ActivityButton>
            <ActivityButton type="option" value="Work" onClick={this.handleUses}>Work</ActivityButton>
          </Div>
          <Select type="option" name="Fit" placeholder="How would you rate the fit?">
            <PlaceHolderOption name="placeholder" value="null">How would you rate the fit?</PlaceHolderOption>
            <Option name="Perfect" value="Perfect">Perfect</Option>
            <Option name="Good" value="Good">Good</Option>
            <Option name="Loose" value="Loose">Loose</Option>
            <Option name="Tight" value="Tight">Tight</Option>
          </Select>
        </UsesAndSizeContainer>
        <ReviewBodyContainer>
          <Input type="text" name="Title" placeholder="Review Title (e.g. Super Warm)(*)" />
          <TextArea type="text" name="Body" placeholder="Write a detailed review here. Tell us and other customers what's working for you and what isn't. (*)" />
        </ReviewBodyContainer>
        <SubmitReview type="submit" value="Submit Review" onClick={() => changeView('null')}>Submit Your Review</SubmitReview>
        <Div>
          <H4>By hitting Submit Review you hereby agree to our Terms of Use</H4>
        </Div>
      </Form>
    );
  }
}

ReviewBody.propTypes = propTypes;
export default ReviewBody;
