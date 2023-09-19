import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import GoToTop from './';

describe('<GoToTop />', () => {
  it('should render', () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo');

    renderTheme(<GoToTop />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
  });
});
