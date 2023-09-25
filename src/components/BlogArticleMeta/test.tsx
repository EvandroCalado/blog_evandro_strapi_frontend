import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import BlogArticleMeta from './';

import mock from '../../utils/db.json';
const post = mock.data.posts.data[0];

describe('<BlogArticleMeta />', () => {
  it('should render with default values', () => {
    renderTheme(<BlogArticleMeta post={post} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Fonte:')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Unsplash' })).toHaveAttribute(
      'href',
      post.attributes.coverResourceUrl,
    );
    expect(
      screen.getByRole('heading', { name: post.attributes.title }),
    ).toBeInTheDocument();
    expect(screen.getByText('3 minutos de leitura')).toBeInTheDocument();
  });

  it('should render with default values', () => {
    const { container } = renderTheme(<BlogArticleMeta post={post} />);
    expect(container).toMatchSnapshot();
  });
});
