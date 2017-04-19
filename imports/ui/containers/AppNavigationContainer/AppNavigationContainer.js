import { Meteor } from 'meteor/meteor';

import { compose } from '/imports/ui/trackerComposer';
import { AppNavigation } from '/imports/ui/components/organisms/AppNavigation';

const logout = () => Meteor.logout(() => {
  // browserHistory.push('/login'); // TODO use router v4 push withRouter
});

const composer = (props, onData) => onData(null, {
  user: Meteor.user(),
  onLogout: logout,
});

export const AppNavigationContainer = compose(composer, {}, {}, { pure: false })(AppNavigation);

export default AppNavigationContainer;
