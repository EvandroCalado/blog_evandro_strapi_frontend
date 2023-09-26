import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import CommingSoon from './';

describe('<CommingSoon />', () => {
  it('should render with default values', () => {
    renderTheme(<CommingSoon />);
    expect(
      screen.getByRole('heading', { name: 'Em Breve !' }),
    ).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<CommingSoon />);
    expect(container).toMatchSnapshot();
  });
});
