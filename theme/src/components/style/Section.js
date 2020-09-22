import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: ${({theme}) => theme.space(5)};

  @media print {
    margin-bottom: ${({theme}) => theme.space(4)};
  }
`;

export default Section;
