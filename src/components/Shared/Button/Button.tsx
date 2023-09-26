import * as Styled from './Button.styles';

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <Styled.Button disabled={disabled} onClick={onClick}>
      {children}
    </Styled.Button>
  );
}
