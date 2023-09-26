import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import AuthorPerfil from './AuthorPerfil';

import mock from '../../../utils/db.json';
const author = mock.data.posts.data[0].attributes.author;
const pagination = mock.data.posts.meta.pagination;

describe('<AuthorPerfil />', () => {
  it('should render with default values', () => {
    renderTheme(<AuthorPerfil author={author} pagination={pagination} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(
      screen.getByText(`Postagens: ${pagination.total}`),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: author.data.attributes.displayName }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Desenvolvedor Frontend/i)).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(
      <AuthorPerfil author={author} pagination={pagination} />,
    );
    expect(container).toMatchSnapshot();
  });
});
