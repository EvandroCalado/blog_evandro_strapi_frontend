import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Heading from './';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>test</Heading>);

    expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument();
  });

  it('should render with uppercase value', () => {
    renderTheme(<Heading uppercase>test</Heading>);

    expect(screen.getByRole('heading', { name: 'test' })).toHaveStyleRule(
      'text-transform',
      'uppercase',
    );
  });

  it('should render with as value', () => {
    const { container } = renderTheme(<Heading as="h2">test</Heading>);

    expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument();
    const h2 = container.querySelector('h2');
    expect(h2?.tagName.toLocaleLowerCase()).toBe('h2');
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<Heading as="h2">test</Heading>);
    expect(container).toMatchSnapshot();
  });
});
