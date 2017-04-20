import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { AppNavigationContainer } from '.';

const stories = storiesOf('AppNavigationContainer', module);

stories.add('default', () => (
  <AppNavigationContainer />
));

