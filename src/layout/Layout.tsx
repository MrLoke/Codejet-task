import { ThemeProvider } from 'styled-components';
import { AppContainer } from './LayoutStyled';
import { theme } from 'src/theme/theme';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>{children}</AppContainer>
    </ThemeProvider>
  );
};
