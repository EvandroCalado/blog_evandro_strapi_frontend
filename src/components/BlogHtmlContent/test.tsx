import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import HtmlComponent from '.';
import { renderTheme } from '../../styles/render-theme';

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
