import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes['7xl']};
    margin: auto;
    padding: 0 ${theme.spacings.md};
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xl};

    & > span > a {
      font-weight: bold;
      transition: ${theme.transitions.faster};
      margin-left: ${theme.spacings.sm};

      &:hover {
        text-decoration: underline;
      }
    }

    ${Title} {
      width: 100%;
      max-width: ${theme.frameSizes['4xl']};
      text-align: center;
    }
`}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 40rem;
    object-fit: cover;
    border-radius: ${theme.spacings.sm};
    overflow: hidden;
  `}
`;

export const ArticleContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes['4xl']};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and ${theme.media.lteOrEqSmall} {
      flex-direction: column;
    }
`}
`;

export const DateContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: end;
    justify-content: center;
    gap: ${theme.spacings.lg};
`}
`;
