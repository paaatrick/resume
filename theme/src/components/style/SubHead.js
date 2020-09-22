import styled from 'styled-components';

const SubHead = styled.h4`
  color: ${({theme}) => theme.color.heading};
  font-size: ${({theme}) => theme.fontSize(0)};
`;

export default SubHead;
