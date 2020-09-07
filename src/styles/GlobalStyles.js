import { createGlobalStyle } from 'styled-components';

const darkTheme = {
  textColor: '#ffffff',
  surfaceColor: '#000000',
};

const lightTheme = {
  textColor: '#000000',
  surfaceColor: '#ffffff',
};

export default createGlobalStyle`
:root {
  --surface: ${lightTheme.surfaceColor};
  --text: ${lightTheme.textColor};
}

body.switch-color-scheme {
  --surface: ${darkTheme.surfaceColor};
  --text: ${darkTheme.textColor};
}

@media (prefers-color-scheme: dark) {
  :root {
    --surface: ${darkTheme.surfaceColor};
    --text: ${darkTheme.textColor};
  }

  body.switch-color-scheme {
    --surface: ${lightTheme.surfaceColor};
    --text: ${lightTheme.textColor};
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
