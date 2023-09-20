import { useContext, useEffect } from 'react';
import { BlogThemeContext } from '../../context/BlogThemeContext';
import icons from '../../icons';
import * as Styled from './styles';

export default function Toggle() {
  const { isDarkMode, setIsDarkMode } = useContext(BlogThemeContext);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }, [isDarkMode, setIsDarkMode]);

  const handleClick = () => {
    setIsDarkMode(localStorage.theme === 'light');
  };

  return (
    <Styled.Label>
      <Styled.Input type="checkbox" />
      <Styled.Span onClick={handleClick} />
      {icons.light}
      {icons.dark}
    </Styled.Label>
  );
}
