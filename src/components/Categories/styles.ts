import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

    & a {
      font-weight: 600;
      transition: ${theme.transitions.faster};
      margin-right: ${theme.spacings.sm};
    }

    & a:hover {
      filter: brightness(1.4);
    }

    & a::before {
      content: '#';
    }

    & a:not(:last-of-type)::after {
      content: ',';
    }
`}
`;
