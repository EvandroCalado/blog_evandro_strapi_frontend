import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.background};
  `}
`;

export const Title = styled.h2`
  font-size: 10rem;
  text-shadow: red -2px 0, cyan 2px 0;
  animation: skew-x-shakeng 1s ease infinite;

  @keyframes skew-x-shakeng{
    0% { transform: skewX(-15deg); }
    5% { transform: skewX(15deg); }
    10% { transform: skewX(-15deg); }
    15% { transform: skewX(15deg); }
    20% { transform: skewX(0deg); }
    100% { transform: skewX(0deg); }
}
`;

export const Title2 = styled.h2`
  font-size: 3rem;
  text-shadow: red -1px 0, cyan 1px 0;

`;
