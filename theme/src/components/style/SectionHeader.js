import styled from 'styled-components';

const SectionHeader = styled.h2`
  font-family: ${({theme}) => theme.font.heading};
  font-size: ${({theme}) => theme.fontSize(0)};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  color: ${({theme}) => theme.color.heading};
  margin-bottom: ${({theme}) => theme.space(3)};
`;

export default SectionHeader;
