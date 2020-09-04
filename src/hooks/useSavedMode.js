import { useEffect, useState } from 'react';

export default function useSavedMode() {
  const [currentMode, setCurrentMode] = useState(false);
  const toggleMode = document.querySelector('input[type="checkbox"]');

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    setCurrentMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', currentMode);
  }, [currentMode]);

  if (currentMode === 'dark') {
    toggleMode.checked = true;
    document.body.classList.add('switch-color-scheme');
  }

  return [currentMode, setCurrentMode];
}
