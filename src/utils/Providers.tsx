'use client';

import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { darkTheme } from '../styles/theme';

interface IAuthProvider {
  children: React.ReactNode;
}

export default function Providers({ children }: IAuthProvider) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
}
