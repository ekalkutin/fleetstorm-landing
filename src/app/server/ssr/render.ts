import fs from 'node:fs';
import path from 'node:path';

import renderToString from 'app/server-entry';
import { generateThemeScript, type Theme } from 'app/theme';

const render = (theme: Theme = 'light') => {
  const htmlPath = path.resolve(process.cwd(), 'build', 'client', 'index.html');
  const cssPath = path.resolve(process.cwd(), 'build', 'server', 'main.css');

  const rendered = renderToString(theme);
  const html = fs.readFileSync(htmlPath, { encoding: 'utf-8' });
  const css = fs.readFileSync(cssPath, { encoding: 'utf-8' });
  const themeScript = generateThemeScript(theme);

  // Replace the root div with the server-rendered content, replace CSS to inline-css
  return html
    .replace('<link href="/main.css" rel="stylesheet">', '')
    .replace('</head>', `<style>${css}</style>${themeScript}</head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root" data-theme="${theme}">${rendered}</div>`,
    );
};

export default render;
