import React from 'react';
import { Alert } from 'react-bootstrap';

import { PageTemplate } from '/imports/ui/components/templates/PageTemplate';
import { AppNavigationContainer } from '/imports/ui/containers/AppNavigationContainer';

export const NotFoundPage = () => (
  <PageTemplate navigation={<AppNavigationContainer />}>
    <div className="NotFound">
      <Alert bsStyle="danger">
        <p><strong>Error [404]</strong>: { window.location.pathname } does not exist.</p>
      </Alert>
    </div>
  </PageTemplate>
);

export default NotFoundPage;
