import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes['4xl']};
    display: flex;
    align-items: center;
    margin: ${theme.spacings.xl} auto;

    @media screen and ${theme.media.lteOrEqSmall} {
      flex-direction: column;
      width: 30rem;
    }
`}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 22rem;
    height: 17rem;
    border-radius: ${theme.spacings.sm};
    overflow: hidden;
    margin-right: ${theme.spacings.md};

    & img {
      object-fit: cover;
    }

    @media screen and ${theme.media.lteOrEqSmall} {
      width: 15rem;
      margin-bottom: ${theme.spacings.lg};
    }
`}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    @media screen and ${theme.media.lteOrEqSmall} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
`}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.sm} 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`}
`;
