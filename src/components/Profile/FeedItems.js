import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import FeedItem from './FeedItem';

const FeedItems = () => {
  const items = [1, 2, 3].map(i => (
    <FeedItem
      key={i}
      title={`Item ${i}`}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      updatedAt={moment().format('ddd, MMM Do YYYY, h:mm a')}
    />
  ));

  return <Container>{items}</Container>;
};

export default FeedItems;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
