import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/theme';

interface BlogThemeProviderProps {
  children: React.ReactNode;
}

interface BlogThemeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: (arg: boolean) => void;
}

export const BlogThemeContext = createContext<BlogThemeContextProps>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export const BlogThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== 'undefined' && localStorage.theme === 'dark',
  );
  const [blogTheme, setBlogTheme] = useState(lightTheme);

  useEffect(() => {
    if (isDarkMode) {
      setBlogTheme(darkTheme);
    } else {
      setBlogTheme(lightTheme);
    }
  }, [isDarkMode]);

  return (
    <BlogThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </BlogThemeContext.Provider>
  );
};
