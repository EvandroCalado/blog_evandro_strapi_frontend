import styled, { css } from 'styled-components';

export const Article = styled.article`
  ${({ theme }) => css`
      padding: 0 ${theme.spacings.md};
  `}
`;
