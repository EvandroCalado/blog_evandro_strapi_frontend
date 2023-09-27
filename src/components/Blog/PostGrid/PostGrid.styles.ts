import styled, { css } from 'styled-components';
import { Title } from '../../Shared/Heading/Heading.styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 49.1rem;
    max-width: ${theme.frameSizes['6xl']};
    margin: 0 auto;

    & > ${Title} {
      display: inline-block;
      font-size: ${theme.font.sizes.xl};
      padding: 0 ${theme.spacings.md};
    }
`}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
    gap: ${theme.spacings.sm};
    width: 100%;
    max-width: ${theme.frameSizes['6xl']};
    margin: 0 auto;
`}
`;
