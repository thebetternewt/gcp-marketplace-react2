import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavigationItems from './NavigationItems';
import SideDrawer from './SideDrawer';

import logo from '../../images/logos/small-logo.png';

export default class extends Component {
  state = {
    sideDrawerOpen: false,
  };

  toggleSideDrawer = () =>
    this.setState(({ sideDrawerOpen }) => ({
      sideDrawerOpen: !sideDrawerOpen,
    }));

  render() {
    const { sideDrawerOpen } = this.state;
    return (
      <Header>
        <div className="header-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Garden City Project" />
            <span className="hidden-sm">The Marketplace</span>
          </Link>
          <div className="hidden-sm">
            <NavigationItems />
          </div>
          <button
            type="button"
            className="menu-button hidden-md hidden-lg"
            onClick={this.toggleSideDrawer}
          >
            <i className="fal fa-bars" />
          </button>
        </div>
        {sideDrawerOpen && <Backdrop />}
        <SideDrawer
          isOpen={sideDrawerOpen}
          close={this.toggleSideDrawer}
          className="hidden-md hidden-lg"
        />
      </Header>
    );
  }
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 80px;
  
  .header-container {
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

  .menu-button {
    padding: 0 20px;
  }

  @media screen and (max-width: 320px) {
    height: 60px;
    
    .logo > img {
      height: 40px; 
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;
`;
