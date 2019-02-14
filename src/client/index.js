import React, { Fragment } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../Routes';

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

hydrate(<App/>, document.getElementById('app'));


