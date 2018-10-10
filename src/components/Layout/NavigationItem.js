import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
  const { link, children } = props;
  return (
    <>
      <NavigationLink exact to={link} className="button">
        {children}
      </NavigationLink>
    </>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationItem;

const NavigationLink = styled(NavLink)`
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    border-bottom: 3px solid #999;
  }

  &.active {
    border-bottom: 3px solid #777;
  }
`;
