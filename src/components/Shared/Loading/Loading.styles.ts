import styled, { css } from 'styled-components';
import { LoadingProps } from './Loading';

export const Container = styled.div<LoadingProps>`
  ${({ theme, size }) => css`
    width: ${size};
    height: ${size};
    border-radius: 50%;
    border: 3px solid ${theme.colors.neltral50};
    border-top-color: ${theme.colors.primary};
    animation: spin 1s linear infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
`}
`;
