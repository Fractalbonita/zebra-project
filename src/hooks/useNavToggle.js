import { useEffect, useRef, useState } from 'react';

export function useNavToggle() {
  const [isActive, setActive] = useState(false);
  const navToggle = useRef();

  useEffect(() => {
    document.addEventListener('click', hideCaption);
    return () => document.removeEventListener('click', hideCaption);
  }, []);

  function showCaption() {
    setActive(true);
  }

  function hideCaption(event) {
    if (event && navToggle.current && navToggle.current.contains(event.target))
      return;
    setActive(false);
  }

  return [isActive, navToggle, showCaption];
}
