import styled from 'styled-components';

const DownloadLink = styled.div`
  max-width: ${({theme}) => theme.maxWidth};
  margin: 0 auto ${({theme}) => theme.space(1)} auto;
  text-align: right;
  padding-right: ${({theme}) => theme.space(1)};

  @media ${({theme}) => theme.breakpoint.jumbo} {
    padding-right: 0;
  }

  @media print {
    display: none;
  }
`;

export default DownloadLink;
