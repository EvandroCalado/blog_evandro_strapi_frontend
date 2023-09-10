import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Error404 from '.';
import { renderTheme } from '../../styles/render-theme';

describe('Error404', () => {
  test('renders the correct titles', () => {
    renderTheme(<Error404 />);

    expect(screen.getByText('ERRO 404')).toBeInTheDocument();
    // expect(getByText('ERRO 404')).toBeInTheDocument();
    // expect(getByText('Página não encontrada !')).toBeInTheDocument();
  });
});
