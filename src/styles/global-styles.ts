import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    height: 100vh;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.primary};
    background-image: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol, ul {
    list-style: none;
  }
`;
