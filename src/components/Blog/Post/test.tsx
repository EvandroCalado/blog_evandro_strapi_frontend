import '@testing-library/jest-dom';
import { renderTheme } from '../../../styles/render-theme';
import Post from './';

import mock from '../../../utils/db.json';
const post = mock.data.posts.data[0];

describe('<Post />', () => {
  it('should render a snapshot', () => {
    const { container } = renderTheme(<Post post={post} />);
    expect(container).toMatchSnapshot();
  });
});
