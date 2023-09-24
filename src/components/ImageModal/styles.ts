import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.md};
    padding: 0 ${theme.spacings.md};

    & > img {
      margin-bottom: ${theme.spacings.xl};
      overflow: hidden;

      &:hover {
       cursor: zoom-in;
      }
    }
`}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: brightness(0.2) blur(1px);
    padding: 0 ${theme.spacings.md};

    & > img {
      width: 50rem;
      height: auto;
      overflow: hidden;
      object-fit: cover;
      cursor: zoom-out;
    }
`}
`;
