import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { LoginPage } from '.';

storiesOf('LoginPage', module)
  .add('default', () => (
    <LoginPage onLogin={action('onLogin')} />
  ));
