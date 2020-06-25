// createGlobalStyle does not currently support @import, so this is the way to use Google Fonts
import './fonts.css';

import styled, { css } from 'styled-components';

const reset = css`
  margin: 0;
  padding: 0;
  border: 0;
`;

const cssVariables = css`
  --size-xxs: 2px;
  --size-xs: 4px;
  --size-s: 8px;
  --size-m: 16px;
  --size-l: 32px;
  --size-xl: 48px;
  --size-xxl: 64px;

  --color-blue: #2f77bc;
  --color-yellow: #dda027;
  --color-orange: #dc4627;
  --color-red: #bd2126;
  --color-black: #000000;
  --color-white: #ffffff;

  --font-main: 'Roboto', sans-serif;
  --font-data: 'IBM Plex Mono', monospace;
  --font-title: 'Righteous', sans-serif;
`;

// Using CSS Variables is far more convenient than using ThemeProvider when the theme is static
const ApicomTheme = styled.div`
  ${reset};
  ${cssVariables};
  font-family: var(--font-main);
`;

export default ApicomTheme;
