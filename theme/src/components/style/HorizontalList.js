import styled from 'styled-components';

const HorizontalList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: ${({align}) => align === 'end' ? 'flex-end' : 'flex-start'};
  list-style: none;

  & > li {
    &:after {
      content: '\\2502';
      margin: 0 0.5rem;
    }

    &:last-of-type:after {
      content: '';
      margin: 0;
    }
  }
`;

export default HorizontalList;
