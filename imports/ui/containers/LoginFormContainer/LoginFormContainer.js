import { Meteor } from 'meteor/meteor';

import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import Alert from 'react-s-alert';

import { Loading } from '/imports/ui/components/molecules/Loading';
import { LoginForm } from '/imports/ui/components/organisms/LoginForm';

import { compose } from '../../trackerComposer';

const login = (nextPathname, email, password) => {
  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      Alert.warning(error.toString(), {
        position: 'top-right',
        effect: 'slide',
      });
    } else {
      Alert.success('Logged in!', {
        position: 'top-right',
        effect: 'slide',
      });

      if (nextPathname) {
        browserHistory.push(nextPathname);
      } else {
        browserHistory.push('/');
      }
    }
  });
};

const composer = ({ match }, onData) => {
  const nextPathname = match && match.state && match.state.nextPathname;
  onData(null, {
    onLogin: login.bind(null, nextPathname),
  });
};

export const LoginFormContainer = compose(composer, Loading)(LoginForm);

LoginFormContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default LoginFormContainer;
