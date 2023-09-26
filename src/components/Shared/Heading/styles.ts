import styled, { css } from 'styled-components';
import { HeadingProps } from '.';

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ uppercase = false }) => css`
    ${titleCase(uppercase)}
`}
`;
