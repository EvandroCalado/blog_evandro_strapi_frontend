import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes['4xl']};
    margin: 0 auto;
    padding: 0 ${theme.spacings.md};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.xl};

    ${Title} {
      font-size: ${theme.font.sizes['4xl']};
    }
`}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};

    &::first-letter {
      font-size: ${theme.font.sizes.xl};
      font-weight: bold;
    }
`}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`

    & > img {
      width: 35rem;
      height: 35rem;
      overflow: hidden;
      border-radius: ${theme.spacings.md};
      object-fit: cover;
    }
`}
`;
