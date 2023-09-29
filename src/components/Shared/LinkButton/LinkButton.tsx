import Link from 'next/link';
import { IconArrowRight } from '../../../icons/icon-arrowright';
import * as Styled from './LinkButton.styles';

export interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Styled.Container>
      <Link href={href}>
        {children} {IconArrowRight}
      </Link>
    </Styled.Container>
  );
}
