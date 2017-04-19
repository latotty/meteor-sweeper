import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LandingPage } from '/imports/ui/components/pages/LandingPage';
import { NotFoundPage } from '/imports/ui/components/pages/NotFoundPage';

import theme from '/imports/ui/components/themes/default';

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;

