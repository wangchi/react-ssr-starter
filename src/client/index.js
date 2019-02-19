import React, { Fragment } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import routes from '../Routes';

const reducer = (state = { name: 'walkerbe' }, action) => {
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
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

hydrate(<App/>, document.getElementById('app'));


