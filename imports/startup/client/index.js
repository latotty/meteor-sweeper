import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  render(
    <div>
      <h1>Hello</h1>
    </div>,
    document.getElementById('react-root'),
  );
});
