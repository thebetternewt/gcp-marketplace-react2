import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import gcpLogo from '../../images/logos/small-logo.png';

const FeedItem = props => {
  const { title, description, updatedAt } = props;
  return (
    <FeedItemCard className="card shadowed">
      <div className="section">
        <h4>{title}</h4>
      </div>
      <img
        src="https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&h=350"
        alt="geometry"
        className="section media"
      />
      <div className="section description">
        <p>{description}</p>
        <div className="section detail">
          <div className="badges">
            <img src={gcpLogo} alt="GCP" />
          </div>
          <small>{updatedAt}</small>
        </div>
      </div>
    </FeedItemCard>
  );
};

FeedItem.defaultProps = {
  description: '',
};

FeedItem.propTypes = {
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default FeedItem;

const FeedItemCard = styled.div`
  &.card {
    margin: 1rem 0;
    max-width: 400px;
    img.section {
      height: 300px;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    p {
      font-size: 0.9rem;
    }
  }

  .detail {
    display: flex;
    justify-content: space-between;
    align-items: center;

    small {
      padding: 10px 5px 3px;
      text-align: right;
      color: #777;
    }
  }

  .badges {
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      height: 20px;
    }
  }
`;
