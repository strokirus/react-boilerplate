import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routePaths } from './settings';

import Page from './pages/Page';

export default (
  <div className="flex-container">
    <BrowserRouter>
      <Switch>
        <Route
          path={routePaths.home}
        >
          <Page />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);
