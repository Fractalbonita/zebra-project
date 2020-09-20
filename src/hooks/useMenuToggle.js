import { useEffect, useRef, useState } from 'react';

export function useMenuToggle() {
  const [isShown, setShown] = useState(false);
  const menuToggle = useRef();

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  function showMenu() {
    setShown(true);
  }

  function closeMenu(event) {
    if (
      event &&
      menuToggle.current &&
      menuToggle.current.contains(event.target)
    )
      return;
    setShown(false);
  }

  return [isShown, menuToggle, showMenu, closeMenu];
}
