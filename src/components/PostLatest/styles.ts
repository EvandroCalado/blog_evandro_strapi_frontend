import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings['2xl']};
    padding: ${theme.spacings.lg} ${theme.spacings.md};

    @media screen and ${theme.media.lteOrEqSmall} {
      flex-direction: column;
      gap: ${theme.spacings.md};
    }
`}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 35rem;
    flex: 1;

    & img {
      object-fit: cover;
      border-radius: ${theme.spacings.sm};
    }

    @media screen and ${theme.media.lteOrEqSmall} {
      flex: none;
    }
`}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.lg};
    flex: 1;
`}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.lg} 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;

    @media screen and ${theme.media.lteOrEqMedium} {
      margin: ${theme.spacings.sm} 0;
      -webkit-line-clamp: 4;
    }

    @media screen and ${theme.media.lteOrEqSmall} {
      margin: ${theme.spacings.sm} 0;
      -webkit-line-clamp: 3;
    }
`}
`;

export const DateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Date = styled.span`
`;
