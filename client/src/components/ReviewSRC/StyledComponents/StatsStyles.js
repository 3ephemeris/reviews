/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StatSyles = {
  StatContainers: {
    SpeechBubble: styled.div`
      background-color: #f8f8f8;
      border: 1px solid #c8c8c8;
      border-radius: 5px;
      width: 110px;
      text-align: center;
      padding: 20px;
      position: absolute;
    `,
    BottomArrow: styled.div`
      border-style: solid;
      position: absolute;

      &.bottom {
      border-color: #c8c8c8 transparent transparent transparent;
      border-width: 8px 8px 0px 8px;
      bottom: -8px;
      }
      &.bottom:after {
        border-color: #f8f8f8 transparent transparent transparent;
        border-style: solid;
        border-width: 7px 7px 0px 7px;
        bottom: 1px;
        content: "";
        position: absolute;
        left: -7px;
      }
    `,
  },
};
