import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import PostNotFound from './';

describe('<PostNotFound />', () => {
  it('should render with default values', () => {
    renderTheme(<PostNotFound />);
    expect(
      screen.getByRole('heading', { name: 'Post não encontrado !' }),
    ).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<PostNotFound />);
    expect(container).toMatchSnapshot();
  });
});
