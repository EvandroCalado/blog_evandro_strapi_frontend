import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Error404 from '.';
import { renderTheme } from '../../styles/render-theme';

describe('Error404', () => {
  it('should render with default values', () => {
    renderTheme(<Error404 />);
    expect(screen.getByText('Erro 404')).toBeInTheDocument();
    expect(screen.getByText('Página não encontrada !')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Voltar para a home' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Voltar para a home' }),
    ).toHaveAttribute('href', '/');
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<Error404 />);
    expect(container).toMatchSnapshot();
  });
});
