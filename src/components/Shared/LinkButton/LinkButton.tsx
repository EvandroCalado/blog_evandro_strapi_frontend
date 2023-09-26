import Link from 'next/link';
import icons from '../../../icons';
import * as Styled from './LinkButton.styles';

export interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Styled.Container>
      <Link href={href}>
        {children} {icons.arrowRght}
      </Link>
    </Styled.Container>
  );
}
