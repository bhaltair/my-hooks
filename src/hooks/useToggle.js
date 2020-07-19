import { useState, useMemo } from 'react';

function useToggle(defaultState = false, reverseValue = true) {
  const [state, setState] = useState(defaultState);
  const actions = useMemo(() => {
    const toggle = (value) => {
      if (value !== undefined) {
        setState(value)
        return
      }
      setState(s => (s === defaultState ? reverseValue: defaultState))
    }
    return {
      toggle
    }
  }, [defaultState, reverseValue])

  return [ state, actions ];
}

export { useToggle }