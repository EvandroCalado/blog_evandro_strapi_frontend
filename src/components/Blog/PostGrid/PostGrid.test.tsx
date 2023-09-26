import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import PostGrid from './PostGrid';

import mock from '../../../utils/db.json';
const posts = mock.data.posts;

describe('<PostGrid />', () => {
  it('should render with default values', () => {
    renderTheme(<PostGrid posts={posts} />);
    expect(
      screen.getByRole('heading', { name: 'Postagens Recentes' }),
    ).toBeInTheDocument();
  });

  it('should render with GridTitle', () => {
    renderTheme(<PostGrid posts={posts} gridTitle="test" />);
    expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument();
  });

  it('should render without posts', () => {
    const mockPosts = {
      data: [],
      meta: {
        pagination: {
          total: 0,
          page: 1,
          pageSize: 10,
          pageCount: 1,
        },
      },
    };

    renderTheme(<PostGrid posts={mockPosts} gridTitle="test" />);
    expect(
      screen.getByRole('heading', { name: 'Post não encontrado !' }),
    ).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<PostGrid posts={posts} />);
    expect(container).toMatchSnapshot();
  });
});
