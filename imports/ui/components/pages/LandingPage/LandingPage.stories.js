import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { LandingPage } from '.';

storiesOf('LandingPage', module)
  .add('default', () => (
    <LandingPage />
  ));

