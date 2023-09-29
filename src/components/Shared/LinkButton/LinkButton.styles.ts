import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

    & a {
      width: max-content;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.neltral1};
      font-weight: bold;
      padding: ${theme.spacings.sm} ${theme.spacings.lg};
      transition: ${theme.transitions.faster};

      &:hover {
        background-color: ${theme.colors.secondaryHover};
        padding-right: 2.5rem;
        /* gap: ${theme.spacings.xs}; */

        & svg {
          margin-left: ${theme.spacings.sm};
        }
      }

      &:active {
        background-color: ${theme.colors.secondaryActive};
      }
    }

    & svg {
      width: 2rem;
      margin-left: ${theme.spacings.xs};
      transition: ${theme.transitions.faster};
    }
`}
`;
