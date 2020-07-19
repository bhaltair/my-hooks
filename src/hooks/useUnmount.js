import { useEffect, useRef, useCallback} from 'react';

function useUnmount(fn) {
  const ref = useRef();
  ref.current = fn

  const handler = useCallback(() => {
    const fn = ref.current
    fn()
  }, [ref]);

  useEffect(() => {
    return handler
  }, [handler])
}

export { useUnmount }