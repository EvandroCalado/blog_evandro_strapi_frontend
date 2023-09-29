import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-content: center;
    gap: ${theme.spacings.sm};

    & svg {
      width: 2rem;
    }
`}
`;

export const Span = styled.span`
  display: flex;
  align-items: end;
  font-weight: 600;
`;
