/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { ModalStyles } from '../StyledComponents/ModalStyles';
import Review from './Review';
import FadeIn from '../animations/FadeIn';

const propTypes = {
  reviews: PropTypes.array,
  changeView: PropTypes.func.isRequired,
};
const defaultProps = {
  reviews: [{ missing: 'missing' }],
};

const ReviewList = (props) => {
  // Props
  const { reviews, changeView } = props;

  // Pagination Settings
  const [pagination, setPagination] = useState({
    data: reviews,
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: [],
  });

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage,
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset]);

  const HandlePageClick = (event) => {
    const { selected } = event;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
    $('#review-container').animate({ scrollTop: 0 }, 'fast');
  };

  // Styles
  const {
    ReviewContainers,
    ReviewContent,
  } = ModalStyles;
  // Page and containers
  const {
    ModalContainer,
    Overlay,
    SeeReviewsContainer,
    ReviewsContainer,
    ExitButtonContainer,
    PaginationContainer,
  } = ReviewContainers;
  // Content
  const {
    ExitButton,
    H1,
  } = ReviewContent;

  return (
    <FadeIn delay={250} duration={300}>
      <ModalContainer>
        <Overlay onClick={() => changeView(null)} />
        <ExitButtonContainer>
          <ExitButton onClick={() => changeView(null)}><u>Close (x)</u></ExitButton>
        </ExitButtonContainer>
        <SeeReviewsContainer id="review-container">
          <PaginationContainer>
            <H1>Showing 10 out of 100 reviews</H1>
            <ReactPaginate
              previousLabel="previous"
              nextLabel="next"
              breakLabel="..."
              breakClassName="break-me"
              pageCount={pagination.pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={HandlePageClick}
              containerClassName="pagination"
              activeClassName="active"
              pageClassName="page-link"
            />
          </PaginationContainer>
          <ReviewsContainer>
            {pagination.currentData && pagination.currentData.map((item) => (
              <Review review={item} key={item._id} />
            ))}
          </ReviewsContainer>
        </SeeReviewsContainer>
      </ModalContainer>
    </FadeIn>
  );
};

ReviewList.propTypes = propTypes;
ReviewList.defaultProps = defaultProps;
export default ReviewList;
