import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideDrawer = ({ isOpen, close }) => (
  <Nav className="col-md-3" open={isOpen}>
    <button type="button" className="button close-btn" onClick={close}>
      <i className="fal fa-times fa-2x" />
    </button>
    <a href="/">Category 1</a>
    <span>Category 2</span>
    <a href="/" className="sublink-1">
      Item 2.1
    </a>
    <span className="sublink-1">Category 2.2</span>
    <a href="/" className="sublink-2">
      Item 2.2.1
    </a>
  </Nav>
);

export default SideDrawer;

SideDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

const Nav = styled.nav`
  transition: all 300ms ease-out;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-300px')};
  height: 100vh;
  width: 250px;
  margin: 0;
  z-index: 1000;

  .close-btn {
    padding: 0 20px;
    align-self: flex-end;
  }

  @media screen and (max-width: 768px) {
  }
`;
