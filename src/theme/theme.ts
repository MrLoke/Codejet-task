import { createGlobalStyle } from 'styled-components';

const ROOT_FONT_SIZE = 16;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: ${ROOT_FONT_SIZE}px;
    font-family: 'Roboto', sans-serif;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(80,80,186,1) 50%, rgba(0,212,255,1) 100%);
  }
`;

export const theme = {
  colors: {
    primary: '#1c005b',
    secondary: '#c0b2e0',
    buttonBackground: '#2d89d8',
    buttonHoverColor: '#eae5f4',
    boardBorderColor: '#6d4db7',
    squareColor: '#d5ccea',
  },
  fontSize: {
    xs: '0.25rem',
    xm: '0.5rem',
    md: '1.3rem',
    lg: '1.5rem',
    xl: '2rem',
  },
};
