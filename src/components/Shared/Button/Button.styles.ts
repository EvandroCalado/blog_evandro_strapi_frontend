import styled, { css } from 'styled-components';
import { ButtonProps } from '..';

export const Button = styled.button<ButtonProps>`
  ${({ theme, width }) => css`
    width: ${width};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.neltral1};
    outline: none;
    border: none;
    padding: ${theme.spacings.md} ${theme.spacings.xl};
    font-size: ${theme.font.sizes.sm};
    font-weight: bold;
    transition: ${theme.transitions.faster};
    cursor: pointer;

    &:disabled {
      background-color: ${theme.colors.neltral5};
      pointer-events: none;
    }

    &:hover {
      background-color: ${theme.colors.secondaryHover};
    }

    &:active {
      background-color: ${theme.colors.secondaryActive};
    }
`}
`;
