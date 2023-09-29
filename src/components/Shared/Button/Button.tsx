import * as Styled from './Button.styles';

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  width?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  disabled,
  width,
  onClick,
}: ButtonProps) {
  return (
    <Styled.Button disabled={disabled} onClick={onClick} width={width}>
      {children}
    </Styled.Button>
  );
}
