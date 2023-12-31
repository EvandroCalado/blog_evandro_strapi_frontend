import { darkTheme, lightTheme } from '../styles/theme';

type Theme = typeof lightTheme | typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
