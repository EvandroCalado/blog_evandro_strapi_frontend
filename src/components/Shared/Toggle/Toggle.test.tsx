import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';
import { BlogThemeContext } from '../../../context/BlogThemeContext';
import { renderTheme } from '../../../styles/render-theme';
import Toggle from './Toggle';

describe('<Toggle />', () => {
  it('should render with default values', () => {
    const { container } = renderTheme(<Toggle />);

    expect(localStorage.getItem('theme')).toBe('light');
    const span = container.querySelector('span');

    fireEvent.click(span as Element);

    localStorage.setItem('theme', 'dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    fireEvent.click(span as Element);

    localStorage.setItem('theme', 'light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it("should set the theme based on the user's dark mode preference", () => {
    const setIsDarkMode = jest.fn();
    const isDarkMode = true;

    renderTheme(
      <BlogThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <Toggle />
      </BlogThemeContext.Provider>,
    );

    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<Toggle />);

    expect(container).toMatchSnapshot();
  });
});
