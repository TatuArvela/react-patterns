// createGlobalStyle does not currently support @import, so this is the way to use Google Fonts
import './fonts.css';

import React from 'react';
import { ThemeProvider } from 'styled-components';

const colors = {
  primary: '#FF6403',
  secondary: '#FFBB00',
  black: 'black',
  white: 'white',
  blue: '#00BBFF',
  yellow: '#FFBB00',
};

const theme = {
  colors,
  bodyBg: colors.black,
  bodyColor: colors.white,
  inputBg: colors.black,
  inputColor: colors.white,
  borderColor: colors.black,
  borderRadius: '1rem',
};

const EncomTheme: React.FunctionComponent = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default EncomTheme;
