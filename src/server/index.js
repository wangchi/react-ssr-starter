import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../pages/Home';

const app = express();

app.use(express.static('public'));

const body = renderToString(<Home/>);

app.get('*', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="/index.js"></script>
    </body>
    </html>`;

  res.send(html);
});

const config = {
  port: 3000
}

app.listen(config.port, () => {
  console.log('React SSR Start listen on http://127.0.0.1:%s', config.port);
});
