import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Footer from './';

describe('<Footer />', () => {
  it('should render default values', () => {
    renderTheme(<Footer footer="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(
      screen.getByText('© 2023 - Todos os direitos reservados'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('github')).toHaveAttribute(
      'href',
      'https://github.com/EvandroCalado',
    );
    expect(screen.getByTestId('linkedin')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/evandro-calado',
    );
    expect(screen.getByTestId('instagram')).toHaveAttribute(
      'href',
      'https://www.instagram.com/dev_evandro',
    );
  });
});
