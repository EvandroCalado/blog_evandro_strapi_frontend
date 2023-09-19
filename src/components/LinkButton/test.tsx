import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import LinkButton from './';

describe('<LinkButton />', () => {
  it('should render with default values', () => {
    renderTheme(<LinkButton href="/">test</LinkButton>);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
