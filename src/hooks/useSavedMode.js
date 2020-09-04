import { useEffect, useState } from 'react';

export function useSavedMode() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    localStorage.setItem('mode', mode);
    savedMode && setMode(savedMode);
  }, [mode]);

  if (mode === 'dark') {
    document.body.classList.add('switch-color-scheme');
  }

  function switchColorTheme(input) {
    if (document.body.classList.toggle('switch-color-scheme')) {
      input.checked = true;
      localStorage.setItem('mode', 'dark');
    } else {
      input.checked = false;
      localStorage.setItem('mode', 'light');
    }
  }

  return [mode, switchColorTheme];
}
