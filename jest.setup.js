import '@testing-library/jest-dom';
import 'jest-styled-components';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const mockTheme = {
  fontSize: {
    xl: '2rem',
  },
  colors: {
    primary: '#000000',
  },
};

const GlobalStyle = createGlobalStyle`
`;

const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={mockTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

import { render as rtlRender } from '@testing-library/react';

const render = (ui, options) =>
  rtlRender(ui, { wrapper: CustomThemeProvider, ...options });

export * from '@testing-library/react';
export { render };
