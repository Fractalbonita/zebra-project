import React from 'react';
import ModeSwitcher from './components/ModeSwitcher';
import GlobalStyles from './styles/GlobalStyles';
import { useSavedMode } from './hooks/useSavedMode';

function App() {
  const [theme, switchColorTheme] = useSavedMode();

  return (
    <div className="app">
      <GlobalStyles />
      <h1>Hello Zebra!</h1>
      <ModeSwitcher />
    </div>
  );
}

export default App;
