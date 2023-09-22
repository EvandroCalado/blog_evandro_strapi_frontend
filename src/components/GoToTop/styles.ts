import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.secondary};
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: ${theme.spacings.xs};
    transition: bounce .2s ease-in-out, border 200ms ease-in-out;
    animation: bounce 2s ease-in-out infinite;
    position: fixed;
    right: ${theme.spacings.md};
    bottom: ${theme.spacings.md};

    & svg {
      width: 4rem;
      color: ${theme.colors.text};
    }

    @keyframes bounce {
    70% { transform:translateY(0%); }
    80% { transform:translateY(-15%); }
    90% { transform:translateY(0%); }
    95% { transform:translateY(-7%); }
    97% { transform:translateY(0%); }
    99% { transform:translateY(-3%); }
    100% { transform:translateY(0); }
}
`}
`;
