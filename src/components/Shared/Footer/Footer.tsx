import Link from 'next/link';
import { IconGithub } from '../../../icons/icon-github';
import { IconInstagram } from '../../../icons/icon-instagram';
import { IconLinkedin } from '../../../icons/icon-linkedin';
import { Setting } from '../../../types/strapi';
import * as Styled from './Footer.styles';

export interface FooterProps {
  setting: Setting;
}

const footerData = [
  {
    id: 432,
    link: 'https://github.com/EvandroCalado',
    icon: IconGithub,
    testId: 'github',
  },
  {
    id: 433,
    link: 'https://www.linkedin.com/in/evandro-calado',
    icon: IconLinkedin,
    testId: 'linkedin',
  },
  {
    id: 434,
    link: 'https://www.instagram.com/dev_evandro',
    icon: IconInstagram,
    testId: 'instagram',
  },
];

export default function Footer({ setting }: FooterProps) {
  const { footer } = setting.data.attributes;

  return (
    <Styled.Footer>
      <Styled.Socials>
        {footerData.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            data-testid={item.testId}
          >
            {item.icon}
          </Link>
        ))}
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
