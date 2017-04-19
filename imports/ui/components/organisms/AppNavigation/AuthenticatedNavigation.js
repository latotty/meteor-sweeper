import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export const AuthenticatedNavigation = ({ user, onLogout }) => {
  const userName = user && user.profile ? user.profile.name : '';
  return (
    <div>
      <Nav>
        <LinkContainer to="/documents">
          <NavItem eventKey={2} href="/documents">Documents</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={3} title={userName} id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} onClick={onLogout}>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    </div>
  );
};

AuthenticatedNavigation.propTypes = {
  user: PropTypes.shape({}),
  onLogout: PropTypes.func.isRequired,
};

AuthenticatedNavigation.defaultProps = {
  user: null,
};

export default AuthenticatedNavigation;
