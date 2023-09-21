import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Tags from './';

import mock from '../../utils/db.json';
const tags = mock.data.posts.data[0].attributes.tags;

describe('<Tags />', () => {
  it('should render with default values', () => {
    renderTheme(<Tags tags={tags} />);
    expect(screen.getByText('Tags:')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Api' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Backend' })).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<Tags tags={tags} />);
    expect(container).toMatchSnapshot();
  });
});
