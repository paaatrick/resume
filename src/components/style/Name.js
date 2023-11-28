import styled from 'styled-components';

const Name = styled.h1`
  font-family: ${({theme}) => theme.font.heading};
  font-size: ${({theme}) => theme.fontSize(2)};
  line-height: ${({theme}) => theme.space(4)};
  text-transform: uppercase;
  letter-spacing: 4px;

  @media print, ${({theme}) => theme.breakpoint.large} {
    font-size: ${({theme}) => theme.fontSize(3)};
    line-height: ${({theme}) => theme.space(5)};
  }
`;

export default Name;
