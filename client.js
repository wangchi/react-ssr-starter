import React from 'react';
import { hydrate } from 'react-dom';

const Home = () => {
  return (
    <div onClick={() => alert('click')}>hello walker</div>
  );
}

hydrate(<Home/>, document.getElementById('app'));


