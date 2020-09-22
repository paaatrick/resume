import styled from 'styled-components';

const ItemHeader = styled.h3`
  font-size: ${({theme}) => theme.fontSize(1)};
  font-weight: 700;
`;

export default ItemHeader;