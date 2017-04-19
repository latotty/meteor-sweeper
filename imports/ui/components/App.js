import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { LandingPage } from '/imports/ui/components/pages/LandingPage';
import { NotFoundPage } from '/imports/ui/components/pages/NotFoundPage';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
