import { useEffect, useRef, useCallback} from 'react';

function useMount(fn) {
  const ref = useRef();
  ref.current = fn

  const handler = useCallback(() => {
    const fn = ref.current
    fn()
  }, [ref]);

  useEffect(handler, [])
}

export { useMount }