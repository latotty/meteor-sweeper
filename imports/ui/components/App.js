import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { NotFoundPage } from '/imports/ui/components/pages/NotFoundPage';

export const App = () => (
  <BrowserRouter>
    <div>
      <Route component={NotFoundPage} />
    </div>
  </BrowserRouter>
);

export default App;
