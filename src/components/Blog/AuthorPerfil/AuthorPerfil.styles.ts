import styled, { css } from 'styled-components';
import { Title } from '../../Shared/Heading/Heading.styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes['4xl']};
    margin: ${theme.spacings.xl} auto;
    padding: 0 ${theme.spacings.md};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.lg};


    ${Title} {
      font-size: ${theme.font.sizes['4xl']};

      @media screen and ${theme.media.lteOrEqSmall} {
        font-size: ${theme.font.sizes.xl};
      }
    }
`}
`;

export const ImageContaner = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 30rem;
    height: 30rem;
    border-radius: ${theme.spacings.sm};
    overflow: hidden;

    @media screen and ${theme.media.lteOrEqMedium} {
      width: 25rem;
      height: 25rem;
    }

    @media screen and ${theme.media.lteOrEqSmall} {
      width: 20rem;
      height: 20rem;
    }
`}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    margin-top: ${theme.spacings.md};
`}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};

    @media screen and ${theme.media.lteOrEqSmall} {
      font-size: 16px;
    }
`}
`;
