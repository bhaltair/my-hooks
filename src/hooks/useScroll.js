import {useState, useEffect } from 'react'

const useScroll = (scrollRef) => {
  const [pos, setPos] = useState([0,0])
  useEffect(() => {
    const ref = scrollRef.current
    function handleScroll(e) {
      setPos([
        ref.scrollLeft,
        ref.scrollTop
      ])
    }
    ref.addEventListener('scroll', handleScroll, false)
    return () => {
      ref.removeEventListener('scroll', handleScroll, false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return pos
}

export { useScroll }