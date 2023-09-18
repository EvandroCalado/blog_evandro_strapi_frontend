import styled, { css } from 'styled-components';

export const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    & svg {
      position: absolute;
      inset: 1.6px;
      width: 3rem;
    }

    & svg:last-of-type {
      transform: translateX(26.5px);
    }
`;

export const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

export const Span = styled.span`
  ${({ theme }) => css`
  cursor: pointer;
    position: absolute;
    z-index: 5;
    inset: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    border: 1px solid;

    &:before {
      position: absolute;
      content: '';
      height: 25.5px;
      width: 25.5px;
      left: 4px;
      bottom: 4px;
      background-color: ${theme.colors.text};
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;

      ${Input}:checked + & {
        -webkit-transform: translateX(25px);
        -ms-transform: translateX(25px);
        transform: translateX(25px);
      }
    }
`}
`;
