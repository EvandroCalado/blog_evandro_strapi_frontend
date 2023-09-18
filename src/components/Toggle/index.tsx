import { useContext, useEffect } from 'react';
import { BlogThemeContext } from '../../context/BlogThemeContext';
import icons from '../../icons';
import * as Styled from './styles';

export default function Toggle() {
  const { isDarkMode, setIsDarkMode } = useContext(BlogThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, setIsDarkMode]);

  return (
    <Styled.Label>
      <Styled.Input type="checkbox" />
      <Styled.Span
        onClick={() => setIsDarkMode(localStorage.theme === 'light')}
      />
      {icons.light}
      {icons.dark}
    </Styled.Label>
  );
}
