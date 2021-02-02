/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalStyles = {
  ReviewContainers: {
    ModalContainer: styled.div`
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 100vh;
      z-index: 2;
      top: 0;
      left 0;
      overflow-y: hidden;
      cursor: pointer;
      align-items: center;
    `,
    Overlay: styled.div`
      background-color: rgba(0,0,0,0.45);
      overflow-y: hidden;
      position: fixed;
      display: flex;
      width: 100%;
      height: 100%;
      z-index: 3;
    `,
    SeeReviewsContainer: styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 80px;
      width: 1339px;
      height: 720px;
      position: fixed;
      background-color: rgba(255,255,255,1);
      border-radius: .5%;
      border: solid rgba(255,255,255,.8);
      overflow-y: auto;
      overflow-x: hidden;
      box-shadow:5px 5px 2.5px rgba(0,0,0,.4);
      z-index: 9999;
    `,
    WriteReviewsContainer: styled.div`
      position: fixed;
      margin-top: 80px;
      display: flex;
      width: 1168px;
      height: 678px;
      justify-content: center;
      background-color: rgba(255,255,255,1);
      border-radius: .5%;
      border: solid rgba(255,255,255,.8);
      overflow-y: auto;
      overflow-x: hidden;
      box-shadow:5px 5px 2.5px rgba(0,0,0,.4);
      z-index: 9999;
      font-family: 'Roboto', Sans Serif;
      color: #000000;
    `,
    ReviewsContainer: styled.div`
      margin-top: 75px;
    `,
    ExitButtonContainer: styled.div`
      width: 100%;
      display: flex;
      position: fixed;
      z-index: 4;
      justify-content: flex-end;
    `,
    PaginationContainer: styled.div`
      width: 1321px;
      background-color: #ffffff;
      z-index: 5;
      display: flex;
      justify-content: space-between;
      position: fixed;
      .pagination {
        display: flex;
        font-family: 'Roboto', Sans Serif;
        font-size: 14px;
        font-weight: 700;
        list-style-type: none;
      }
      .page-link{
        padding: 0px 3px 0px 3px;
        color: #999999;
      }
      .break-me {
        cursor: pointer;
        letter-spacing: 2px;
      }
      .active {
        border-color: transparent;
        outline: none;
        color: #000000;
        font-size: 14px;
      }
    `,
    ReviewContainer: styled.div`
      color: #212529;
      display: flex;
      justify-content: space-between;
      width: 1321px;
      height: 300px;
     `,
    ReviewHeaderContainer: styled.div`
        display: flex;
        justify-content: space-between;
      `,
    ReviewAuthorContainer: styled.aside`
      width: 426px;
      height: 225px;
      background-color: #f5f5f5;
      border-radius: 3%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: 'Roboto', Sans Serif;
      padding-left: 20px;
    `,
    ProductInfoContainer: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 525px;
      height: 448px;
    `,
    ReviewBodyContainer: styled.div`
      width: 518px;
      height 356px;
    `,
    Form: styled.form`
      display: flex;
      width: 100%;
      flex-direction: column;
    `,
    Div: styled.div`
      display: flex;
      width: 100%;
      justify-content: center;
    `,
    UserInfoContainer: styled.div`
      display: flex;
      flex-direction: column;
      width: 360px;
      justify-content: center;
    `,
    OverallRatingContainer: styled.div`
      display: flex;
      width: 388px;
      margin: 10px 0px 0px 15px;
      justify-content: space-between;
    `,
    UsesAndSizeContainer: styled.div`
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      margin-bottom: 10px;
      width: 100%;
      height: 30px;
    `,
  },
  ReviewContent: {
    ExitButton: styled.button`
      font-family: 'Roboto', Sans Serif;
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      z-index: 4;
    `,
    ReviewsContent: styled.div`
      display: flex;
      padding: 10px;
      flex-direction: column;
      width: 829px;
      height: 263px;
      border-top: 2px solid #f5f5f5;
      font-family: 'Roboto', Sans Serif;
      font-size: 15px;
    `,
    H1: styled.h1`
      height: 25px;
      font-family: 'Roboto', Sans Serif;
      font-size: 21.5px;
      font-weight: 700;
    `,
    H2: styled.h2`
      font-size: 12px;
      font-family: 'Roboto', Sans Serif;
      font-weight: 700;
    `,
    H3: styled.h3`
      font-size: 18px;
      margin: 0px;
    `,
    B: styled.b`
      font-weight: 700;
    `,
    H4: styled.h4`
      margin: 0px;
      font-weight: 500;
      font-size: 10px;
      color: #999999;
    `,
    Img: styled.img`
      height: 360px;
      width: 360px;
    `,
    Ul: styled.ul`
      list-style-type: none;
      padding: 0px;
    `,
    Stars: styled.b`
      cursor: point;
      font-family: 'Roboto', Sans Serif;
      font-size: 24px;
    `,
    CenteredSpan: styled.span`
      display: flex;
      width: 100%;
      justify-content: center;
    `,
    Input: styled.input`
      font-weight: 700;
      width: 100%;
      margin-top: 10px;
      font-family: 'Roboto', Sans Serif;
      border: solid #000000;
      border-width: 0px 0px 2px 0px;
      &:focus {
        outline: none;
      }
    `,
    TextArea: styled.textarea`
      font-weight: 700;
      width: 100%;
      height: 200px;
      margin-top: 15px;
      font-family: 'Roboto', Sans Serif;
      border: solid #000000;
      border-width: 2px;
      border-radius: 2%;
      &:focus {
        outline: none;
      }
    `,
    Select: styled.select`
      font-weight: 700;
      background-color: #ffffff;
      width: 100%;
      font-family: 'Roboto', Sans Serif;
      border: solid #000000;
      border-width: 0px 0px 2px 0px;
      &:focus {
        outline: none;
      }
    `,
    PlaceHolderOption: styled.option`
      background-color: #ffffff;
    `,
    Option: styled.option`
      color: #000000;
      background-color: #ffffff;
      opacity: 0.6;
      transition: 0.3s;
      &hover: {
        opacity: 1;
      }

    `,
    ActivityButton: styled.button`
      width: 102px;
      border: none;
      outline: none;
      text-align: center;
      background-color: #ffffff;
      font-size: 14px;
      font-family: 'Roboto', Sans Serif;
      font-weight: 700;
      color: #000000;
      opacity: 0.5;
      transition: 0.3s;
      &:active {
        transform: translate(0px, 2px);
        -webkit-transform: translate(0px, 2px);
        opacity: 1;
        color: #000000;
      }
      &:hover {
        opacity: 1;
        color: #000000;
        font-size: 16px;
      }
      &.selected {
        opacity: 1;
        color: #000000;
        font-size: 16px;
      }
    `,
    SubmitReview: styled.button`
      background-color: #000000;
      width: 486px;
      cursor: pointer;
      border: none;
      border-radius: 500px;
      font-family: 'Roboto', Sans Serif;
      font-size: 24px;
      font-weight: 900;
      color: #ffffff;
      text-align: center;
      outline: none;
      transition: all 0.2s ease;
      &:active {
        transform: translate(0px, 2px);
        -webkit-transform: translate(0px, 2px);
        box-shadow: 0px 1px 0px 0px;
      }
      &:hover {
        transform:scale(1.05);
      }
    `,
  },
};
