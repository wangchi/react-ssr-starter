import React, { Fragment } from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from '../Routes';
import { getClientStore } from '../store';

const App = () => {
  return (
    <Provider store={getClientStore()}>
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
    </Provider>
  );
};

// hydrate(<App/>, document.getElementById('app'));
render(<App/>, document.getElementById('app'));


