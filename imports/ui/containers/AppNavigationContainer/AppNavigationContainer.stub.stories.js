import React from 'react';
import { stub } from 'react-stubber';
import { action } from '@kadira/storybook';
import { boolean, text } from '@kadira/storybook-addon-knobs';

import { AppNavigation } from '/imports/ui/components/organisms/AppNavigation';

import { AppNavigationContainer } from '.';

stub(AppNavigationContainer, () => {
  const user = boolean('AppNavigation.Authenticated', false) ? {
    profile: {
      name: text('AppNavigation.Name', 'John Doe'),
    },
  } : null;
  return (
    <AppNavigation onLogout={action('AppNavigation.logout')} user={user} />
  );
});

