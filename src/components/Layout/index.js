import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
  const { children } = props;
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Layout;

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    /* max-width: 960px; */
    flex-grow: 1;
  }
`;
