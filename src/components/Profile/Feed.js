import React from 'react';
import styled from 'styled-components';
import FeedItems from './FeedItems';
import Button from '../UI/Button';

const Feed = () => (
  <FeedContainer>
    <FeedHeader>
      <h2>Contributions</h2>
      <ul>
        <li className="button">All</li>
        <li className="button">GCP</li>
      </ul>
    </FeedHeader>
    <FeedItems />
    <Button solid fontSize="1.2rem">
      Load More
    </Button>
  </FeedContainer>
);

export default Feed;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    display: inline-block;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  li {
    /* padding: 0 10px; */
    text-transform: uppercase;
  }
`;
