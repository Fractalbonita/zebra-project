import { createGlobalStyle } from 'styled-components';

const darkTheme = {
  textColor: '#ffffff',
  surfaceColor: '#000000',
  primaryColor: 'palegreen',
  accentColor: 'lightgrey',
  lightShadow: 'rgba(0,0,0,0.1)',
  darkShadow: 'rgba(0,0,0,0.2)',
  onSurfaceColor: '#404040',
};

const lightTheme = {
  textColor: '#000000',
  surfaceColor: '#ffffff',
  primaryColor: 'rosybrown',
  accentColor: 'lightgrey',
  lightShadow: 'rgba(0,0,0,0.1)',
  darkShadow: 'rgba(0,0,0,0.2)',
  onSurfaceColor: '#ffffff',
};

export default createGlobalStyle`
:root {
  --surface: ${lightTheme.surfaceColor};
  --text: ${lightTheme.textColor};
  --primary: ${lightTheme.primaryColor};
  --accent: ${lightTheme.accentColor};
  --light-shadow: ${lightTheme.lightShadow};
  --dark-shadow: ${lightTheme.darkShadow};
  --on-surface: ${lightTheme.onSurfaceColor};
}

body.switch-color-scheme {
  --surface: ${darkTheme.surfaceColor};
  --text: ${darkTheme.textColor};
  --primary: ${darkTheme.primaryColor};
  --accent: ${darkTheme.accentColor};
  --light-shadow: ${darkTheme.lightShadow};
  --dark-shadow: ${darkTheme.darkShadow};
  --on-surface: ${darkTheme.onSurfaceColor};
}

@media (prefers-color-scheme: dark) {
  :root {
    --surface: ${darkTheme.surfaceColor};
    --text: ${darkTheme.textColor};
    --primary: ${darkTheme.primaryColor};
    --accent: ${darkTheme.accentColor};
    --light-shadow: ${darkTheme.lightShadow};
    --dark-shadow: ${darkTheme.darkShadow};
    --on-surface: ${darkTheme.onSurfaceColor};
  }

  body.switch-color-scheme {
    --surface: ${lightTheme.surfaceColor};
    --text: ${lightTheme.textColor};
    --primary: ${lightTheme.primaryColor};
    --accent: ${lightTheme.accentColor};
    --light-shadow: ${lightTheme.lightShadow};
    --dark-shadow: ${lightTheme.darkShadow};
    --on-surface: ${lightTheme.onSurfaceColor};
  }
}

* {
  box-sizing: border-box;
  color: inherit;
}

body {
  background-color: var(--surface);
  color: var(--text);
  font-family: 'Source Sans Pro', sans-serif;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  transition: all .5s;
}
`;
