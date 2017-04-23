import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { LoginPage } from '.';

storiesOf('LoginPage', module)
  .add('default', () => (
    <LoginPage />
  ));
