'use client';

import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { BlogThemeProvider } from '../context/BlogThemeContext';
import { GlobalStyles } from '../styles/global-styles';

interface IAuthProvider {
  children: React.ReactNode;
}

export default function Providers({ children }: IAuthProvider) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <BlogThemeProvider>
        {children}
        <GlobalStyles />
      </BlogThemeProvider>
    </StyleSheetManager>
  );
}
