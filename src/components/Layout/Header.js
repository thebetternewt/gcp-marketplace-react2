import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavigationItems from './NavigationItems';

import logo from '../../images/logos/small-logo.png';

export default () => (
  <Header>
    <div>
      <Link to="/" className="logo">
        <img src={logo} alt="Garden City Project" />
        <span className="hidden-sm">The Marketplace</span>
      </Link>
      <div className="hidden-sm">
        <NavigationItems />
      </div>
    </div>
  </Header>
);

const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 80px;
  
  & > div {
    display: flex
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    max-width: 90vw;
  }

  img {
    height: 60px;
    padding-right: 15px;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 320px) {
    height: 60px;
    
    .logo > img {
      height: 40px; 
    }
  }
`;
