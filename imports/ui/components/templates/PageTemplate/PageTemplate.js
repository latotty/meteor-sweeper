import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';

export const PageTemplate = ({ navigation, children, ...props }) => (
  <div>
    {navigation}
    <Grid {...props}>
      {children}
    </Grid>
  </div>
);

PageTemplate.propTypes = {
  navigation: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
