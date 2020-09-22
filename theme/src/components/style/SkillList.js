import styled from 'styled-components';

const mediumMaxWidth = 90;

const SkillList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  & > dt {
    font-weight: 700;
    width: 100%;
  }

  & > dd {
    flex-grow: 1;
    width: 100%;
    margin-bottom: ${({theme}) => theme.space(1)};
  }

  @media ${({theme}) => theme.breakpoint.medium} {
    & > dt {
      max-width: ${mediumMaxWidth}px;
    }

    & > dd {
      max-width: calc(100% - ${mediumMaxWidth}px);
    }
  }

  @media print {
    & > dd {
      margin-bottom: 0;
    }
  }
`;

export default SkillList;
