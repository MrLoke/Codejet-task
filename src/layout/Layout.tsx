import { ThemeProvider } from 'styled-components';
import { AppContainer } from './LayoutStyled';
import { GlobalStyle, theme } from 'src/theme/theme';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>{children}</AppContainer>
    </ThemeProvider>
  );
};
