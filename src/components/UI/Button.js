import styled from 'styled-components';

export default styled.button`
  display: ${({ block }) => (block ? 'block' : 'inline-block')}
  border: 2px solid #5d5d5f;
  background: ${({ solid }) => (solid ? '#5d5d5d' : 'transparent')};
  border-radius: 8px;
  text-transform: uppercase;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : '1.5rem')};
  color: ${({ solid }) => (solid ? '#fff' : '#5d5d5d')};
  padding: 0.2em 1.5em;
  margin: 10px auto;
`;
