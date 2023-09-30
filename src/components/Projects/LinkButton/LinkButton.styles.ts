import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: ${theme.transitions.faster};

    & svg {
      width: 2rem;
    }

    &:hover {
      filter: brightness(1.5);
    }

    &:not(:last-of-type)::after {
      content: ',';
    }
  }
`}
`;
