import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes['4xl']};
    margin: 0 auto;

    iframe {
      color: ${theme.colors.text};
    }
`}
`;
