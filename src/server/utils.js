import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
// import App from '../App';
// import Header from '../components/Header';
import { StaticRouter, Route } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import routes from '../Routes';
import { Provider } from 'react-redux';
import { getStore } from '../store';

export const render = (req, res) => {
  const store = getStore();

  const matchedRoutes = matchRoutes(routes, req.path);

  // console.log(matchedRoutes);
  const promises = [];

  matchedRoutes.forEach(item => {
    // console.log(item.route.loadData);
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    // console.log(store.getState());

    const content = renderToString((
      <Provider store={store}>
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
      </Provider>
    ));

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        <div id="app">${content}</div>
        <script>
            window.context = {state: ${JSON.stringify(store.getState())}};
        </script>
        <script src="/index.js"></script>
      </body>
      </html>`);

  }).catch((err) => {
    console.log(err);
  });
}
