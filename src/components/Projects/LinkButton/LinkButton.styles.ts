import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;

  svg {
    width: 2rem;
  }

  a {
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: ${theme.spacings.xs};
    text-transform: lowercase;
    color: ${theme.colors.neltral0};
    transition: ${theme.transitions.faster};

    &:hover {
      filter: brightness(1.3);
    }
  }
`}
`;
