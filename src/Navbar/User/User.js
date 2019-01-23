import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  margin: 10px;
`;
const User = ({ width, height }) => (
  <Svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 563.43 563.43">
    <path
      d="M280.79,314.559c83.266,0,150.803-67.538,150.803-150.803S364.055,13.415,280.79,13.415S129.987,80.953,129.987,163.756 S197.524,314.559,280.79,314.559z M280.79,52.735c61.061,0,111.021,49.959,111.021,111.021S341.851,274.776,280.79,274.776 s-111.021-49.959-111.021-111.021S219.728,52.735,280.79,52.735z"
      fill="#e0e0e0"
      stroke="white"
      strokeWidth="5"
    />
    <path
      d="M19.891,550.015h523.648c11.102,0,19.891-8.789,19.891-19.891c0-104.082-84.653-189.198-189.198-189.198H189.198 C85.116,340.926,0,425.579,0,530.124C0,541.226,8.789,550.015,19.891,550.015z M189.198,380.708h185.034 c75.864,0,138.313,56.436,148.028,129.524H41.17C50.884,437.607,113.334,380.708,189.198,380.708z"
      fill="#e0e0e0"
      stroke="white"
      strokeWidth="5"
    />
  </Svg>
);

User.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default User;
