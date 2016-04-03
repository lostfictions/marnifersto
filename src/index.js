import './styles/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const render = () => {
  const App = require('./App');
  ReactDOM.render(<App />, root);
};

render();

if(module.hot) {
  module.hot.accept('./App', () => render());
}


