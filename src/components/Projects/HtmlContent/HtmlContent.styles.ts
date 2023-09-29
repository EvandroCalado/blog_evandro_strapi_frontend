import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
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

  ul,
  ol {
    margin: ${theme.spacings.sm} ${theme.spacings.lg};
  }

  blockquote {
    border-left: 0.5rem solid;
    font-style: italic;
    padding-left: ${theme.spacings.md};
    margin: ${theme.spacings.md} 0;
  }
`}
`;
