import React, { Fragment } from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '../Routes';

const App = () => {
  return (
    <Router>
      <Fragment>
        {
          routes.map(route => (
            <Route key={route.key} path={route.path} render={props => (
              <route.component {...props} routes={route.routes}/>
            )}/>
          ))
        }
      </Fragment>
    </Router>
  );
};

hydrate(<App/>, document.getElementById('app'));


