import path from 'node:path';

import cookieParser from 'cookie-parser';
import express, { type Request, type Response } from 'express';

import { getThemeFromRequest } from 'app/theme';

import render from './ssr/render';

const app = express();

const STATIC_DIR = path.join(process.cwd(), 'build', 'client');

app.use(cookieParser());
app.use(express.static(STATIC_DIR, { index: false }));
app.use((request: Request, response: Response) => {
  const theme = getThemeFromRequest(request);
  const html = render(theme);
  response.status(200).send(html);
});

app.listen(3000, () => {
  console.log('App started');
});
