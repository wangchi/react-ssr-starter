import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import routes from './Routes';

const App = (props) => {
  return (
    <Fragment>
      <Header/>
      {renderRoutes(props.route.routes)}
      {/* {
        props.routes.map(route => <Route {...route}/>)
      } */}
    </Fragment>
  );
}

export default App;
