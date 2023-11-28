import styled from 'styled-components';

const Surface = styled.div`
  background-color: ${({theme}) => theme.color.background};
  padding: ${({theme}) => theme.space(3)} 0;

  @media ${({theme}) => theme.breakpoint.jumbo} {
    padding: ${({theme}) => theme.space(3)};
  }

  @media print {
    padding: 0;
  }
`;

export default Surface;
