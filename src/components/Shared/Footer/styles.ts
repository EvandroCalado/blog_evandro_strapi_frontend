import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-transform: uppercase;
    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.md} ${theme.spacings.lg};
    color: ${theme.colors.neltral1};
`}
`;

export const Socials = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes['6xl']};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.md};
    border-bottom: 1px solid ${theme.colors.neltral1};
    margin-bottom: ${theme.spacings.md};

      & a {
        transition: ${theme.transitions.faster};

        &:hover {
          color: ${theme.colors.primary};
      }

      & svg {
        width: 4rem;
      }
  `}
`;

export const Developer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes['6xl']};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

      @media ${theme.media.lteOrEqSmall} {
        flex-direction: column;
        text-align: center;
      }
  `}
`;
