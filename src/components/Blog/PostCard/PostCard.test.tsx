import '@testing-library/jest-dom';
import { renderTheme } from '../../../styles/render-theme';
import PostCard from './PostCard';

import mock from '../../../utils/db.json';
const post = mock.data.posts.data[0];

describe('<PostCard />', () => {
  it('should render a snapshot', () => {
    const { container } = renderTheme(<PostCard post={post} />);
    expect(container).toMatchSnapshot();
  });
});
