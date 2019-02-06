import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

const Hello = () => {
  return <div>hello walker</div>;
}

const body = renderToString(<Hello/>);

console.log(body);

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
      ${body}
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
