import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Categories from './';

import mock from '../../utils/db.json';
const categories = mock.data.posts.data[0].attributes.categories;

describe('<Categories />', () => {
  it('should render with default values', () => {
    renderTheme(<Categories categories={categories} />);
    expect(screen.getByRole('link', { name: 'Strapi' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Node' })).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<Categories categories={categories} />);
    expect(container).toMatchSnapshot();
  });
});
