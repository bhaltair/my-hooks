import { useState } from 'react';

function useToggle(defaultState = false) {
  if ( typeof defaultState !== 'boolean') throw new Error('defaultState must be boolean')
  const [state, setState] = useState(defaultState);

  const toggle = () => {
    setState(!state)
  }

  return [ state, { toggle } ];
}

export { useToggle }