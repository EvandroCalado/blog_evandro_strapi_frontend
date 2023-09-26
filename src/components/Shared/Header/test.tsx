import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { renderTheme } from '../../../styles/render-theme';
import Header from './';

import mock from '../../../utils/db.json';
const setting = mock.data.setting;

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('<Header />', () => {
  it('should render with default values', () => {
    const useRouterMock = useRouter as jest.Mock;
    useRouterMock.mockReturnValue({ query: {} });

    renderTheme(<Header setting={setting} />);
    expect(screen.getByTestId('menu')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('menu'));
    expect(screen.getByTestId('close')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('close'));
    expect(screen.getByTestId('menu')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sobre mim' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projetos' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contato' })).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<Header setting={setting} />);
    expect(container).toMatchSnapshot();
  });
});
