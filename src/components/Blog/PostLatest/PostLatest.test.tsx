import '@testing-library/jest-dom';
import { renderTheme } from '../../../styles/render-theme';
import PostLatest from './PostLatest';

import mock from '../../../utils/db.json';
const post = mock.data.posts.data[0];

describe('<PostLatest />', () => {
  it('should render with reverse', () => {
    const { container } = renderTheme(
      <PostLatest post={post} reverse={true} />,
    );
    expect(container.firstChild).toHaveStyleRule('flexDirection: row-reverse');
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<PostLatest post={post} />);
    expect(container).toMatchSnapshot();
  });
});
