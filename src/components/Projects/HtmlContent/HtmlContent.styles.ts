import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
  & p {
    margin: ${theme.spacings.xs} 0;
  }

  & a {
    font-weight: bold;
    transition: ${theme.transitions.faster};

    &:hover {
        text-decoration: underline;
    }

    &:visited {
        color: ${theme.colors.info};
      }
  }

  & ul,
  & ol {
    margin: ${theme.spacings.sm} ${theme.spacings.lg};
  }

  & li {
    margin: ${theme.spacings.xs} 0;
  }

  blockquote {
    border-left: 0.5rem solid;
    font-style: italic;
    padding-left: ${theme.spacings.md};
    margin: ${theme.spacings.md} 0;
  }
`}
`;
