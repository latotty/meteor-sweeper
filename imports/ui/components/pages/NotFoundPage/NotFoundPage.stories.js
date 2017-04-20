import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { NotFoundPage } from '.';

storiesOf('NotFoundPage', module)
  .add('default', () => (
    <NotFoundPage />
  ));
