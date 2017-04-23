import { Accounts } from 'meteor/accounts-base';

import Alert from 'react-s-alert';
import { withRouter } from 'react-router-dom';
import { mayBeStubbed } from 'react-stubber';

import { Loading } from '/imports/ui/components/molecules/Loading';
import { SignupForm } from '/imports/ui/components/organisms/SignupForm';

import { compose } from '../../trackerComposer';

export const alertSignupSuccess = () => (
  Alert.success('Welcome!', {
    position: 'top-right',
    effect: 'slide',
  })
);

export const alertSignupError = errorMsg => (
  Alert.warning(errorMsg, {
    position: 'top-right',
    effect: 'slide',
  })
);

const signup = ({ history }, data) => {
  const user = {
    email: data.emailAddress,
    password: data.password,
    profile: {
      name: data.name,
    },
  };

  Accounts.createUser(user, (error) => {
    if (error) {
      alertSignupError(error.toString());
    } else {
      alertSignupSuccess();

      history.push('/');
    }
  });
};

const composer = ({ history }, onData) => {
  onData(null, {
    onSignup: signup.bind(null, { history }),
  });
};

export const SignupFormContainer = mayBeStubbed(withRouter(compose(composer, Loading)(SignupForm)));

export default SignupFormContainer;
