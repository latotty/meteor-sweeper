import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Alert from 'react-s-alert';

import { LandingPage } from '/imports/ui/components/pages/LandingPage';
import { LoginPage } from '/imports/ui/components/pages/LoginPage';
import { SignupPage } from '/imports/ui/components/pages/SignupPage';
import { NotFoundPage } from '/imports/ui/components/pages/NotFoundPage';

import theme from '/imports/ui/components/themes/default';

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Alert stack={{ limit: 3 }} />
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;

