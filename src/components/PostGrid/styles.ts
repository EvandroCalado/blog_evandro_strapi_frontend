import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
    gap: ${theme.spacings.xl};
    width: 100%;
    max-width: ${theme.frameSizes['6xl']};
    margin: 0 auto;
`}
`;
