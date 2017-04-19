import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import { PageTemplate } from '/imports/ui/components/templates/PageTemplate';
import { AppNavigationContainer } from '/imports/ui/containers/AppNavigationContainer';

export const LandingPage = () => (
  <PageTemplate navigation={<AppNavigationContainer />}>
    <div className="Index">
      <Jumbotron className="text-center">
        <h2>Meteor Sweeper</h2>
        <span className="glyphicon glyphicon-search" aria-hidden="true" />
      </Jumbotron>
    </div>
  </PageTemplate>
);

export default LandingPage;
