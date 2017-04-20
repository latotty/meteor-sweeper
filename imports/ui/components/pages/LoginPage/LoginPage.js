import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { PageTemplate } from '/imports/ui/components/templates/PageTemplate';
import { LoginFormContainer } from '/imports/ui/containers/LoginFormContainer';
import { AppNavigationContainer } from '/imports/ui/containers/AppNavigationContainer';

export const LoginPage = () => (
  <PageTemplate navigation={<AppNavigationContainer />}>
    <div>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <h4 className="page-header">Login</h4>
          <LoginFormContainer />
        </Col>
      </Row>
    </div>
  </PageTemplate>
);

export default LoginPage;
