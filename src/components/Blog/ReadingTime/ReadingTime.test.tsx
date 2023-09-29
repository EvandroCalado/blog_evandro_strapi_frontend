import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import ReadingTime from './ReadingTime';

describe('<ReadingTime />', () => {
  it('should render with default values', () => {
    renderTheme(<ReadingTime content="test" />);
    expect(
      screen.getByText('menos de um minuto de leitura'),
    ).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<ReadingTime content="test" />);
    expect(container).toMatchSnapshot();
  });
});
