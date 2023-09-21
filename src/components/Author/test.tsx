import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Author from './';

import mock from '../../utils/db.json';
const author = mock.data.posts.data[0].attributes.author;

describe('<Author />', () => {
  it('should render with default values', () => {
    renderTheme(<Author author={author} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Evandro Calado' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'ver perfil' })).toHaveAttribute(
      'href',
      '/author/evandro-calado',
    );
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<Author author={author} />);
    expect(container).toMatchSnapshot();
  });
});
