import styled, { css } from 'styled-components';
import { HeaderProps } from '.';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes['6xl']};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.xl};
    padding: ${theme.spacings.md};
 `}
`;

export const NavContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid;
    padding-bottom: ${theme.spacings.md};
    position: relative;

    & > span {
      display: none;
      cursor: pointer;

      @media screen and ${theme.media.lteOrEqMedium} {
        display: block;
      }
    }

    & span > svg {
      width: 3rem;
      position: relative;
      z-index: 10;
    }
`}
`;

export const Nav = styled.nav<Pick<HeaderProps, 'showMenu'>>`
  ${({ theme, showMenu }) => css`
  width: 100%;
  display: flex;
  align-items: center;

  & a {
    text-transform: uppercase;
    margin-right: ${theme.spacings.md};
    position: relative;
    transition: ${theme.transitions.faster};

    &::before {
      content: '';
      position: absolute;
      bottom: -2px;
      width: 0;
      height: 1px;
      background-color: ${theme.colors.text};
      transition: ${theme.transitions.faster};
    }

    &:hover::before {
      width: 100%;
    }

  }

  @media screen and ${theme.media.lteOrEqMedium} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${theme.spacings.md};
    gap: ${theme.spacings.sm};
    border-radius: ${theme.spacings.xs};
    border: 1px solid;
    position: absolute;
    z-index: 10;
    top: 3rem;
    left: 0;
    right: 0;
    transition: ${theme.transitions.faster};
    background-color: ${theme.colors.background};
    opacity: 0;
    visibility: hidden;


    ${
      showMenu
        ? css`
      top: 6rem;
      opacity: 1;
      visibility: visible;
    `
        : css`
      opacity: 0;
      visibility: hidden;`
    }

    & a {
      margin-right: 0;
    }
  }
`}
`;

export const SearchContainer = styled.form`
    display: flex;
    align-items: center;
    position: relative;

    & svg {
      width: 2rem;
      position: absolute;
      right: 0;
    }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    outline: none;
    border: none;
    padding-right: ${theme.spacings.md};
    padding-bottom: 0.2rem;
    background-color: transparent;
    color: ${theme.colors.text};
    font-size: 2rem;
    border-bottom: 1px solid transparent;
    transition: ${theme.transitions.faster};

    &:focus {
      border-bottom: 1px solid;
    }
`}
`;
