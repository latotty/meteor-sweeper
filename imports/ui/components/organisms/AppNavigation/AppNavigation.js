import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { PublicNavigation } from './PublicNavigation';
import { AuthenticatedNavigation } from './AuthenticatedNavigation';

export const AppNavigation = ({ user, onLogout }) => {
  const renderNavigation = () => (
    user ?
      <AuthenticatedNavigation user={user} onLogout={onLogout} /> :
      <PublicNavigation />
  );
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Meteor sweeper</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        { renderNavigation() }
      </Navbar.Collapse>
    </Navbar>
  );
};

AppNavigation.propTypes = {
  user: PropTypes.shape({}),
  onLogout: PropTypes.func.isRequired,
};

AppNavigation.defaultProps = {
  user: null,
};

export default AppNavigation;
