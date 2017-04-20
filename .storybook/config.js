import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import { setStubbingMode } from 'react-komposer';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router'
import Alert from 'react-s-alert';

// Enable react-komposer stubbing.
setStubbingMode(true);

import theme from '../imports/ui/components/themes/default';

import './main.scss';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

const req = require.context('../imports/ui', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
};

addDecorator(withKnobs);

addDecorator(story => (
  <div>
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        {story()}
      </ThemeProvider>
    </MemoryRouter>
    <Alert stack={{ limit: 3 }} />
  </div>
));

configure(loadStories, module);
