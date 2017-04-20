/* eslint-env node, mocha */

import 'mocha';
import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '.';

describe('<NotFoundPage />', () => {
  it('renders', () => {
    shallow(<NotFoundPage />);
  });
});
