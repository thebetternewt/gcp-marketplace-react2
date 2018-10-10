import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/help">Help</Link>
      </li>
    </FooterLinks>
    <span>&copy; {moment().format('YYYY')} Garden City Project</span>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  padding: 2rem 15px;
  text-align: center;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  li {
    padding: 0 1rem;
    font-size: 0.8rem;

    &:not(:first-of-type) {
      border-left: 1px solid #777;
    }
  }
`;
