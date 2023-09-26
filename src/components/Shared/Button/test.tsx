import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import Button from './';

describe('<Button />', () => {
  it('should render with default values', () => {
    renderTheme(<Button>test</Button>);
    expect(screen.getByRole('button', { name: 'test' })).toBeInTheDocument();
  });

  it('should render disabled', () => {
    renderTheme(<Button disabled>test</Button>);
    expect(screen.getByRole('button', { name: 'test' })).toBeDisabled();
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<Button disabled>test</Button>);
    expect(container).toMatchSnapshot();
  });
});
