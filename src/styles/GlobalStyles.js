import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --surface: white;
  --text: black;
}

body.switch-color-scheme {
  --surface: black;
  --text: white;
}

@media (prefers-color-scheme: dark) {
  :root {
    --surface: black;
    --text: white;
  }

  body.switch-color-scheme {
    --surface: white;
    --text: black;
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
}
`;
