import { readFile, writeFile, mkdir } from 'fs/promises';
import { join as pathJoin } from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { chromium } from 'playwright';
import theme from './theme';

import Resume from './components/Resume';
import GlobalStyle from './components/style/GlobalStyle';

function render(resume) {
  const sheet = new ServerStyleSheet();
  const html = renderToStaticMarkup(sheet.collectStyles(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Resume resume={resume} />
    </ThemeProvider>
  ));
  const style = sheet.getStyleTags();

  let gtag = ''
  if (process.env.GA_MEASUREMENT_ID) {
    gtag = `
      <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.GA_MEASUREMENT_ID}');
      </script>
    `
  }

  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
      <title>${resume.basics.name}</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet">
      ${style}
      ${gtag}
    </head>
    <body>
      ${html}
    </body>
  </html>`;
};

async function exportPdf(htmlFile, pdfFile) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(`file://${htmlFile}`, {
    waitUntil: 'networkidle',
  });
  await page.pdf({ 
    format: 'Letter',
    path: pdfFile,
    scale: 0.85,
    printBackground: false,
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in',
    },
  });

  await context.close();
  await browser.close();
}

(async () => {
  const data = await readFile('resume.json');
  const resume = JSON.parse(data);
  const html = render(resume);

  const exportDir = pathJoin(process.cwd(), 'export');
  await mkdir(exportDir, { recursive: true });

  const htmlFile = pathJoin(exportDir, 'index.html')
  await writeFile(htmlFile, html);
  console.log(`Wrote ${htmlFile}`);

  const pdfFile = pathJoin(exportDir, 'resume.pdf')
  await exportPdf(htmlFile, pdfFile);
  console.log(`Wrote ${pdfFile}`)
})()
