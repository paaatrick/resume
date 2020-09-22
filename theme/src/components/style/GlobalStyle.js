import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p, ul, dl, dd, dt, body {
    margin: 0;
    padding: 0;
    font-weight: 400;
  }

  body {
    background: white;
    font-size: 16px;
    line-height: 1.5;
    font-family: ${({theme}) => theme.font.body};
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.color.accent};
  }

  p, ul {
    margin-bottom: ${({theme}) => theme.space(1)};
  }

  ul {
    list-style: square;
    padding-left: ${({theme}) => theme.space(2)};
  }

  @media print {
    a {
      color: black;
    }
  }
`;

export default GlobalStyle;
