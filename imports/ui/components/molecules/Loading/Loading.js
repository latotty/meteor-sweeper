import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const BaseLoading = ({ className }) => (
  <svg
    className={className}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 40 40"
    enableBackground="new 0 0 40 40"
  >
    <path
      opacity="1.0"
      fill="#eee"
      d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,
      14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,
      5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,
      5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,
      26.541,26.626,31.749,20.201,31.749z"
    />
    <path
      fill="#da5347"
      d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z"
    />
  </svg>
);

BaseLoading.propTypes = {
  className: PropTypes.string.isRequired,
};

export const Loading = styled(BaseLoading)`
  animation-name: ${rotate360};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default Loading;
