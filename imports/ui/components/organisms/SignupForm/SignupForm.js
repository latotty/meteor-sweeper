import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import { BlockControlLabel } from '/imports/ui/components/atoms/BlockControlLabel';

export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
      passwordAgain: '',
      name: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const emailAddress = this.state.emailAddress;
    const password = this.state.password;
    const name = this.state.name;
    this.props.onSignup({ emailAddress, password, name });
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
      <div>
        <form
          onSubmit={this.handleSubmit}
          noValidate
        >
          <FormGroup>
            <BlockControlLabel>Name</BlockControlLabel>
            <FormControl
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              autoFocus="true"
            />
          </FormGroup>
          <FormGroup>
            <BlockControlLabel>Email Address</BlockControlLabel>
            <FormControl
              type="email"
              name="emailAddress"
              placeholder="Email Address"
              value={this.state.emailAddress}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <BlockControlLabel>
              <span className="pull-left">Password</span>
            </BlockControlLabel>
            <FormControl
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <BlockControlLabel>
              <span className="pull-left">Password again</span>
            </BlockControlLabel>
            <FormControl
              type="password"
              name="passwordAgain"
              placeholder="Password again"
              value={this.state.passwordAgain}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <Button type="submit" bsStyle="success">Sign Up</Button>
        </form>
        <p>Already have an account? <Link to="/login">Log In</Link>.</p>
      </div>
    );
  }
}

SignupForm.propTypes = {
  onSignup: PropTypes.func.isRequired,
};

export default SignupForm;
