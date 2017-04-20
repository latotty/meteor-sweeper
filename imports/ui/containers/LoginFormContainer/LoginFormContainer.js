import { Meteor } from 'meteor/meteor';

import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
import { withRouter } from 'react-router-dom';
import { mayBeStubbed } from 'react-stubber';

import { Loading } from '/imports/ui/components/molecules/Loading';
import { LoginForm } from '/imports/ui/components/organisms/LoginForm';

import { compose } from '../../trackerComposer';

export const alertLoginSuccess = () => (
  Alert.success('Logged in!', {
    position: 'top-right',
    effect: 'slide',
  })
);

export const alertLoginError = errorMsg => (
  Alert.warning(errorMsg, {
    position: 'top-right',
    effect: 'slide',
  })
);

const login = ({ history, nextPathname }, email, password) => {
  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      alertLoginError(error.toString());
    } else {
      alertLoginSuccess();

      if (nextPathname) {
        history.push(nextPathname);
      } else {
        history.push('/');
      }
    }
  });
};

const composer = ({ history, match }, onData) => {
  const nextPathname = match && match.state && match.state.nextPathname;
  onData(null, {
    onLogin: login.bind(null, { history, nextPathname }),
  });
};

export const LoginFormContainer = mayBeStubbed(withRouter(compose(composer, Loading)(LoginForm)));

export default LoginFormContainer;
