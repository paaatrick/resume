import styled from 'styled-components';
import HorizontalList from './HorizontalList';

const KeywordList = styled(HorizontalList)`
  flex-wrap: wrap;

  & > li {
    border: 1px solid;
    border-color: ${({theme}) => theme.color.accentLightBorder};
    background-color: ${({theme}) => theme.color.accentLightBg};
    padding: ${({theme}) => theme.space(-1)};
    margin-right: ${({theme}) => theme.space(0)};
    margin-bottom: ${({theme}) => theme.space(0)};
    border-radius: 3px;

    &:after {
      content: '';
      margin: 0;
    }
  }

  @media print {
    & > li {
      border: none;
      background: none; 
      padding: 0;
      margin: 0;

      &:after {
        content: ', ';
        margin-right: ${({theme}) => theme.space(-1)};
      }
    }
  }
`;

export default KeywordList;
