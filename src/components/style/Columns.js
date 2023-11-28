import styled from 'styled-components';

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme}) => theme.space(1)};

  @media ${({theme}) => theme.breakpoint.medium} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    & > *:nth-child(2) {
      text-align: right;
      white-space: nowrap;
      margin-left: ${({theme}) => theme.space(1)};
    }
  }
`;

export default Columns;
