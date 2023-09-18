import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    height: 54.6rem;
    align-items: center;
    justify-content: center;

    @media screen and ${theme.media.lteOrEqSmall} {
      height: 40rem;
    }
`}
`;
