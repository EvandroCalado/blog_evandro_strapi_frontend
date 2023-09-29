import * as Styled from './Loading.styles';

export interface LoadingProps {
  size?: string;
}

export default function Loading({ size = '20px' }: LoadingProps) {
  return <Styled.Container size={size}></Styled.Container>;
}
