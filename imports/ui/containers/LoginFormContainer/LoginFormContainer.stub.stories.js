import React from 'react';
import { stub } from 'react-stubber';
import { action } from '@kadira/storybook';

import { LoginForm } from '/imports/ui/components/organisms/LoginForm';

import { LoginFormContainer, alertLoginSuccess, alertLoginError } from '.';

stub(LoginFormContainer, () => {
  const onLogin = (email, password) => {
    action('login')(email, password);

    if (password.length % 2) {
      alertLoginSuccess();
    } else {
      alertLoginError('Error: I\'m a teapot [418]');
    }
  };
  return (
    <LoginForm onLogin={onLogin} />
  );
});
