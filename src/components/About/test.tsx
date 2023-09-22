import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import About from './';

import mock from '../../utils/about.json';
const about = mock.data.abouts.data[0];

describe('<About />', () => {
  it('should render with default values', () => {
    renderTheme(<About about={about} />);
    expect(
      screen.getByRole('heading', { name: about.attributes.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Olá, sou um entusiasta do desenvolvimento front-end/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Quando não estou imerso em transformar ideias/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: about.attributes.image.data.attributes.name,
      }),
    ).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<About about={about} />);
    expect(container).toMatchSnapshot();
  });
});
