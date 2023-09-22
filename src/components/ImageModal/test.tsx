import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import ImageModal from './';

import mock from '../../utils/about.json';
const imageHobby = mock.data.abouts.data[0].attributes.imageHobby;

describe('<ImageModal />', () => {
  it('should render with default values', () => {
    renderTheme(<ImageModal imageHobby={imageHobby} />);
    expect(
      screen.getByRole('img', { name: 'thumbnail_07.jpg' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'thumbnail_08.jpg' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'thumbnail_02.jpg' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'thumbnail_01.jpg' }),
    ).toBeInTheDocument();
  });

  it('should render the modal', () => {
    renderTheme(<ImageModal imageHobby={imageHobby} />);
    const img = screen.getByRole('img', { name: 'thumbnail_07.jpg' });

    fireEvent.click(img);

    const modal = screen.getByTestId('modal');
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    fireEvent.click(modal.firstChild!);

    expect(modal).not.toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<ImageModal imageHobby={imageHobby} />);

    expect(container).toMatchSnapshot();
  });
});
