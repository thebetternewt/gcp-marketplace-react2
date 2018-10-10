import React from 'react';
import styled from 'styled-components';
import Button from './UI/Button';
import marketplaceLogo from '../images/gcp_marketplace_logo.png';

const Landing = () => (
  <LandingContainer>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={marketplaceLogo} alt="Garden City Marketplace" />
          <h1 className="visually-hidden">The Marketplace</h1>
          <h2>Connecting Creatives</h2>
          <Button block>Sign Up</Button>
          <Button block solid>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  </LandingContainer>
);

export default Landing;

const LandingContainer = styled.div`
  text-align: center;
  flex-grow: 1;

  img {
    margin: 3rem auto 0;
  }

  h2 {
    font-style: italic;
    font-size: 1.2rem;
    margin-bottom: 4rem;
  }

  button {
    width: 300px;
    max-width: 90vw;
    font-size: 1.5rem;
  }
  .row {
    justify-content: center;
  }
`;
