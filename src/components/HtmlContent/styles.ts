import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  width: 100%;
  max-width: ${theme.frameSizes['4xl']};
  margin: 0 auto;
  padding: ${theme.spacings.md} 0;

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

    & h2, h3, h4, h5, h6, p {
      margin: ${theme.spacings.md} 0;
    }

    & img {
        max-width: 100%;
    }

    & pre {
      border-radius: ${theme.spacings.xs};
    }

  .image {
      background: ${theme.colors.text};
      line-height: 0;
      margin: ${theme.spacings.md} 0;
    }

  .image figcaption {
    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xs};
    text-align: center;
    line-height: 1.3;
  }

  .image-style-side {
    max-width: 50%;
    float: none;
    margin: ${theme.spacings.md};

    @media screen and ${theme.media.gteOrEqSmall} {
      float: right;
      max-width: 100%;
    }
  }

  ul,
  ol {
      margin: ${theme.spacings.md} ${theme.spacings.lg};
  }

  blockquote {
    border-left: 0.5rem solid;
    font-style: italic;
    padding-left: ${theme.spacings.md};
    margin: ${theme.spacings.md} 0;
  }
`}
`;
