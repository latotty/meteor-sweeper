import React from 'react';
import { stub } from 'react-stubber';
import { action } from '@kadira/storybook';

import { SignupForm } from '/imports/ui/components/organisms/SignupForm';

import { SignupFormContainer, alertSignupSuccess, alertSignupError } from '.';

stub(SignupFormContainer, () => {
  const onSignup = ({ emailAddress, password, name }) => {
    action('signup')(emailAddress, password, name);

    if (password.length % 2) {
      alertSignupSuccess();
    } else {
      alertSignupError('Error: I\'m a teapot [418]');
    }
  };
  return (
    <SignupForm onSignup={onSignup} />
  );
});
