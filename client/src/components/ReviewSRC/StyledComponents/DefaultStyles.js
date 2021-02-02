/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const DefaultStyles = {
  // Component and paging
  ReviewComponentMain: {
    ComponentRows: styled.section`
      width: 100%;
      height: 599px;
      background-color: #000000;
      display: flex;
      align-items: center;
    `,
    ComponentColumns: styled.section`
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-left: 100px;
    `,
    ContentContainer: styled.div`
      width: 100%;
      height: 152px;
      display: flex;
      text-align: left;
    `,
    ReviewButtonContainers: styled.div`
      color: #ffffff;
      display: flex;
      font-weight: 700;
      text-align: left;
      margin-left: 388px;
    `,
    ComponentTitleContainter: styled.div`
      width: 400px;
    `,
  },
  // Primary display and content
  ContentComponents: {
    ContentTitle: styled.b`
      color: #ffffff;
      display: inline;
      font-family: 'Roboto', sans-serif;
      font-size: 32px;
      font-weight: 700;
      text-align: left;
    `,
    ContentBody: styled.div`
      width: 267px;
      height: 60px;
      color: #ffffff;
      font-family: 'Roboto', Sans Serif;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.2px;
      display: flex;
      align-items: center;
  `,
    ContentStats: styled.div`
      width: 267px;
      height: 24px;
      align-items: center;
      color: #999999;
      display: flex;
      font-size: 12px;
      font-weight: 700;
      text-align: left;
  `,
    QuestionIcon: styled.button`
      background-color: #999999;
      border: none;
      border-radius: 100%;
      display: inline;
      margin: 10px;
      font-size: 12px;
      text-align: left;
      outline: none;
  `,
    SeeReviewsButton: styled.button`
      background-color: #ffffff;
      cursor: pointer;
      padding: 10px 18px;
      border: none;
      border-radius: 500px;
      font-weight: 700;
      font-family: 'Roboto', Sans Serif;
      font-size: 16px;
      color: #000000;
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
    WriteReviewsButton: styled.button`
      background: none;
      cursor: pointer;
      border: none;
      padding: 10px 18px;
      font-weight: 700;
      font-size: 16px;
      font-family: 'Roboto', Sans Serif;
      color: #ffffff;
      text-align: center;
      outline: none;
    `,
    ComponentTitle: styled.b`
      color: #ffffff;
      font-family: 'Roboto', Sans Serif;
      font-weight: 700;
      font-size: 18px;
    `,
  },
};
