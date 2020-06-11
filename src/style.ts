import { createGlobalStyle, ThemeProps } from 'styled-components';

type Theme = {
  mainFont: string;
  codeFont: string;
};

export const defaultTheme: Theme = {
  mainFont:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  codeFont:
    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props: ThemeProps<Theme>): Theme['mainFont'] =>
      props.theme.mainFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: ${(props: ThemeProps<Theme>): Theme['codeFont'] =>
      props.theme.codeFont};
  }
`;
