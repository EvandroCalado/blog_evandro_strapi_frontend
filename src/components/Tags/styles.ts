import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  width: 100%;
  max-width: ${theme.frameSizes['4xl']};
  margin: 0 auto;

  & span {
    font-style: italic;
    margin-right: ${theme.spacings.sm};
  }

  & a {
      font-weight: 600;
      transition: ${theme.transitions.faster};
      margin-right: ${theme.spacings.sm};
    }

    & a:hover {
      filter: invert(.3);
    }

    & a::before {
      content: '#';
    }

    & a:not(:last-of-type)::after {
      content: ',';
    }
`}
`;
