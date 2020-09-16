import { createGlobalStyle } from 'styled-components';

const darkTheme = {
  textColor: '#ffffff',
  surfaceColor: '#000000',
  primaryColor: 'palegreen',
  accentColor: 'lightgrey',
};

const lightTheme = {
  textColor: '#000000',
  surfaceColor: '#ffffff',
  primaryColor: 'rosybrown',
  accentColor: 'lightgrey',
};

export default createGlobalStyle`
:root {
  --surface: ${lightTheme.surfaceColor};
  --text: ${lightTheme.textColor};
  --primary: ${lightTheme.primaryColor};
  --accent: ${lightTheme.accentColor};
}

body.switch-color-scheme {
  --surface: ${darkTheme.surfaceColor};
  --text: ${darkTheme.textColor};
  --primary: ${darkTheme.primaryColor};
  --accent: ${darkTheme.accentColor};
}

@media (prefers-color-scheme: dark) {
  :root {
    --surface: ${darkTheme.surfaceColor};
    --text: ${darkTheme.textColor};
    --primary: ${darkTheme.primaryColor};
    --accent: ${darkTheme.accentColor};
  }

  body.switch-color-scheme {
    --surface: ${lightTheme.surfaceColor};
    --text: ${lightTheme.textColor};
    --primary: ${lightTheme.primaryColor};
    --accent: ${lightTheme.accentColor};
  }
}

* {
  box-sizing: border-box;
  color: inherit;
}

body {
  background-color: var(--surface);
  color: var(--text);
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  transition: all .5s;
}
`;
