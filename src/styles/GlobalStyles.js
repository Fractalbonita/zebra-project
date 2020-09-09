import { createGlobalStyle } from 'styled-components';

const darkTheme = {
  textColor: '#ffffff',
  surfaceColor: '#000000',
  primaryColor: 'palegreen',
};

const lightTheme = {
  textColor: '#000000',
  surfaceColor: '#ffffff',
  primaryColor: 'rosybrown',
};

export default createGlobalStyle`
:root {
  --surface: ${lightTheme.surfaceColor};
  --text: ${lightTheme.textColor};
  --primary: ${lightTheme.primaryColor};
}

body.switch-color-scheme {
  --surface: ${darkTheme.surfaceColor};
  --text: ${darkTheme.textColor};
  --primary: ${darkTheme.primaryColor};
}

@media (prefers-color-scheme: dark) {
  :root {
    --surface: ${darkTheme.surfaceColor};
    --text: ${darkTheme.textColor};
    --primary: ${darkTheme.primaryColor};
  }

  body.switch-color-scheme {
    --surface: ${lightTheme.surfaceColor};
    --text: ${lightTheme.textColor};
    --primary: ${lightTheme.primaryColor};
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
