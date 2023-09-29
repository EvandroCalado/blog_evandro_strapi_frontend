import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import BlogLogo from './Logo';

import mock from '../../../utils/db.json';
const setting = mock.data.setting;

describe('<logo />', () => {
  it('should render with default values', () => {
    renderTheme(<BlogLogo setting={setting} />);
    expect(
      screen.getByRole('heading', { name: 'Evandro Calado' }),
    ).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<BlogLogo setting={setting} />);
    expect(container).toMatchSnapshot();
  });
});
