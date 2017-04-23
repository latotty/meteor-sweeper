import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { PageTemplate } from '/imports/ui/components/templates/PageTemplate';
import { SignupFormContainer } from '/imports/ui/containers/SignupFormContainer';
import { AppNavigationContainer } from '/imports/ui/containers/AppNavigationContainer';

export const SignupPage = () => (
  <PageTemplate navigation={<AppNavigationContainer />}>
    <div>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <h4 className="page-header">Signup</h4>
          <SignupFormContainer />
        </Col>
      </Row>
    </div>
  </PageTemplate>
);

export default SignupPage;
