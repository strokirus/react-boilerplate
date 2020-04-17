import React from 'react';
import ReactDOM from '@hot-loader/react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = (Component, props = {}) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => {
    render(App);
  });
}
