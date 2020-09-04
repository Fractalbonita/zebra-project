import { useEffect, useState } from 'react';

export function useSavedMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  if (theme === 'dark') {
    document.body.classList.add('switch-color-scheme');
  }

  function switchColorTheme() {
    if (document.body.classList.toggle('switch-color-scheme')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return [theme, switchColorTheme];
}
