// createGlobalStyle does not currently support @import, so this is the way to use Google Fonts
import './fonts.css';

import React from 'react';
import styled, { css } from 'styled-components';

const reset = css`
  margin: 0;
  padding: 0;
  border: 0;
`;

// Using CSS Variables is far more convenient than using ThemeProvider when the theme is static
const CSSVariableProvider = styled.div`
  ${reset};
  --size-xs: 4px;
  --size-s: 8px;
  --size-m: 16px;
  --size-l: 32px;
  --size-xl: 64px;

  --color-blue: #2f77bc;
  --color-yellow: #dda027;
  --color-orange: #dc4627;
  --color-red: #bd2126;
  --color-black: #000000;
  --color-white: #ffffff;
`;

const ApicomTheme: React.FunctionComponent = ({ children }) => {
  return <CSSVariableProvider>{children}</CSSVariableProvider>;
};

export default ApicomTheme;
