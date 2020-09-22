import styled from 'styled-components';

const Paper = styled.div`
  background-color: white;
  margin: 0 auto;
  padding: ${({theme}) => theme.space(3)};
  max-width: ${({theme}) => theme.maxWidth};
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 0.15);

  @media ${({theme}) => theme.breakpoint.large} {
    padding: ${({theme}) => theme.space(4)};
  }

  @media ${({theme}) => theme.breakpoint.jumbo} {
    padding: ${({theme}) => theme.space(5)};
  }

  @media print {
    box-shadow: none;
    max-width: auto;
    padding: 0;
  }
`;

export default Paper;
