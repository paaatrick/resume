import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import theme from './theme';

import Resume from './components/Resume';
import GlobalStyle from './components/style/GlobalStyle';

function render(resume) {
  try {
    const sheet = new ServerStyleSheet();
    const html = renderToStaticMarkup(sheet.collectStyles(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Resume resume={resume} />
      </ThemeProvider>
    ));
    const style = sheet.getStyleTags();
    return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
      <title>${resume.basics.name}</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet">
      ${style}
    </head>
    <body>
      ${html}
    </body>
  </html>`;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const pdfRenderOptions = {
  format: 'Letter',
  mediaType: 'print',
  printBackground: false,
  scale: 0.85,
  margin: {
    top: '0.5in',
    right: '0.5in',
    bottom: '0.5in',
    left: '0.5in',
  },
}

export {
  render,
  pdfRenderOptions,
};
