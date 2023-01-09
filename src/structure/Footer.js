import React from 'react';
import { css } from 'emotion/macro';

const footerStyle = css`
  max-width: 63.75em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0 0 4px 4px;
  color: #313030;
  text-align: center;
  padding-bottom: 2em;

  span {
    margin: 0;
    font-family: 'cornerstone', sans-serif;
    font-weight: 600;
  }
`;

const Footer = () => (
  <footer className={footerStyle}>
    <span>&copy; Ice Cream</span>
  </footer>
);

export default Footer;
