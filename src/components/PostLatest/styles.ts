import styled, { css } from 'styled-components';
import { PostLatestProps } from '.';

export const Container = styled.div<Pick<PostLatestProps, 'reverse'>>`
  ${({ theme, reverse }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xl};
    padding: ${theme.spacings.lg} ${theme.spacings.md};
    grid-column: 1 / 4;

    ${
      reverse &&
      css`
      flex-direction: row-reverse;
    `
    }

    @media screen and ${theme.media.lteOrEqLarge} {
      grid-column: 1 / 3;
    }

    @media screen and ${theme.media.lteOrEqMedium} {
      flex-direction: column;
      grid-column: 1 / 3;
    }

    @media screen and ${theme.media.lteOrEqSmall} {
      flex-direction: column;
      grid-column: 1 / 2;
    }
`}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 35rem;

    & img {
      object-fit: cover;
      border-radius: ${theme.spacings.sm};
    }

    @media screen and ${theme.media.lteOrEqMedium} {
      height: 30rem;
    }
`}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.lg};

    & > a {
      transition: ${theme.transitions.faster};

      &:hover {
        text-decoration: underline;
        filter: invert(.2);
      }
    }
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
