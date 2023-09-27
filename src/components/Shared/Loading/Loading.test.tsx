import '@testing-library/jest-dom';
import { renderTheme } from '../../../styles/render-theme';
import Loading from './Loading';

describe('<Loading />', () => {
  it('should render with default values', () => {
    const { container } = renderTheme(<Loading />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyleRule('width', '20px');
    expect(container.firstChild).toHaveStyleRule('height', '20px');
  });

  it('should render with size', () => {
    const { container } = renderTheme(<Loading size="50px" />);
    expect(container.firstChild).toHaveStyleRule('width', '50px');
    expect(container.firstChild).toHaveStyleRule('height', '50px');
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
