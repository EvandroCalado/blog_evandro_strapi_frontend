import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xs};
    padding: ${theme.spacings.lg} ${theme.spacings.md};
`}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 20rem;

    & img {
      object-fit: cover;
      border-radius: ${theme.spacings.sm};
    }
`}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
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


    }

    ${Title} {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
`}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.xs} 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
`}
`;

export const DateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Date = styled.span`
`;
