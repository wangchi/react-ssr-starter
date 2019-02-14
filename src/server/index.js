import express from 'express';
import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
// import App from '../App';
// import Header from '../components/Header';
import { StaticRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../Routes';


const app = express();

app.use(express.static('public'));


app.get('*', (req, res) => {

  const App = () => {
    return (
      <StaticRouter location={req.path} context={{}}>
        <Fragment>
          {renderRoutes(routes)}
          {/* {
            routes.map(route => (
              <Route key={route.key} path={route.path} render={props => (
                <route.component {...props} routes={route.routes}/>
              )}/>
            ))
          } */}
        </Fragment>
      </StaticRouter>
    );
  }
  const body = renderToString(<App/>);

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
