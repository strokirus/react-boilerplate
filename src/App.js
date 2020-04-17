import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import routes from './routes';

class App extends React.Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <header />
        <section>
          {routes}
        </section>
        <footer>
          <p
            className="about"
          >
            Created by
            <a
              href="//diasalexandre.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alexandre Dias
            </a>
          </p>
        </footer>
      </Provider>
    );
  }
}

export default App;
