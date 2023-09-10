import Link from 'next/link';
import icons from '../../icons';
import * as Styled from './styles';

export interface FooterProps {
  footer: string;
}

export default function Footer({ footer }: FooterProps) {
  return (
    <Styled.Footer>
      <Styled.Socials>
        <Link
          href={'https://github.com/EvandroCalado'}
          target="_blank"
          data-testid="github"
        >
          {icons.github}
        </Link>
        <Link
          href={'https://www.linkedin.com/in/evandro-calado'}
          target="_blank"
          data-testid="linkedin"
        >
          {icons.linkedin}
        </Link>
        <Link
          href={'https://www.instagram.com/dev_evandro'}
          target="_blank"
          data-testid="instagram"
        >
          {icons.instagram}
        </Link>
      </Styled.Socials>
      <Styled.Developer>
        <span>{footer}</span>
        <span>
          &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </span>
      </Styled.Developer>
    </Styled.Footer>
  );
}
