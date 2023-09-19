import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import HtmlComponent from './';

describe('<HtmlComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<HtmlComponent html="<b>test</b>" />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test')).toHaveStyle('font-weight: bold');
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<HtmlComponent html="<b>test</b>" />);
    expect(container).toMatchSnapshot();
  });
});
