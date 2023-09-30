import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 20rem;
    padding: 0 ${theme.spacings.md};
    border-radius: ${theme.spacings.sm};
    overflow: hidden;

    & img {
      object-fit: cover;
    }
`}
`;
