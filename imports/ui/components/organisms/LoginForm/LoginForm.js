import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import { BlockControlLabel } from '/imports/ui/components/atoms/BlockControlLabel';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const emailAddress = this.state.emailAddress;
    const password = this.state.password;
    this.props.onLogin(emailAddress, password);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        noValidate
      >
        <FormGroup>
          <BlockControlLabel>Email Address</BlockControlLabel>
          <FormControl
            type="email"
            name="emailAddress"
            placeholder="Email Address"
            value={this.state.emailAddress}
            onChange={this.handleInputChange}
            autoFocus="true"
          />
        </FormGroup>
        <FormGroup>
          <BlockControlLabel>
            <span className="pull-left">Password</span>
            <Link
              className="pull-right"
              to="/recover-password"
              tabIndex="-1"
            >Forgot Password?</Link>
          </BlockControlLabel>
          <FormControl
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}

          />
        </FormGroup>
        <Button type="submit" bsStyle="success">Login</Button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
