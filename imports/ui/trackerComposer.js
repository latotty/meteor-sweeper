/* global Tracker */

import { compose as _compose } from 'react-komposer';

function getTrackerLoader(reactiveMapper) {
  return (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() => Tracker.autorun(() => {
      // assign the custom clean-up function.
      trackerCleanup = reactiveMapper(props, onData, env);
    }));

    return () => {
      if (typeof trackerCleanup === 'function') trackerCleanup();
      return handler.stop();
    };
  };
}

export const compose = (reactiveMapper, ...args) =>
  _compose(getTrackerLoader(reactiveMapper), ...args);

export default compose;
