import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import Footer from './';

import mock from '../../../utils/db.json';
const setting = mock.data.setting;

describe('<Footer />', () => {
  it('should render with default values', () => {
    renderTheme(<Footer setting={setting} />);
    expect(screen.getByTestId('github')).toBeInTheDocument();
    expect(screen.getByTestId('github')).toHaveAttribute(
      'href',
      'https://github.com/EvandroCalado',
    );
    expect(screen.getByTestId('linkedin')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/evandro-calado',
    );
    expect(screen.getByTestId('instagram')).toBeInTheDocument();
    expect(screen.getByTestId('instagram')).toHaveAttribute(
      'href',
      'https://www.instagram.com/dev_evandro',
    );
    expect(screen.getByText('Evandro Calado')).toBeInTheDocument();
    expect(
      screen.getByText('© 2023 - Todos os direitos reservados'),
    ).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<Footer setting={setting} />);
    expect(container).toMatchSnapshot();
  });
});
