import Link from 'next/link';
import icons from '../../icons';
import { Setting } from '../../types/strapi';
import * as Styled from './styles';

const footerData = [
  {
    id: 432,
    link: 'https://github.com/EvandroCalado',
    icon: icons.github,
  },
  {
    id: 433,
    link: 'https://www.linkedin.com/in/evandro-calado',
    icon: icons.linkedin,
  },
  {
    id: 432,
    link: 'https://www.instagram.com/dev_evandro',
    icon: icons.instagram,
  },
];

export interface FooterProps {
  setting: Setting;
}

export default function Footer({ setting }: FooterProps) {
  const { footer } = setting.data.attributes;

  return (
    <Styled.Footer>
      <Styled.Socials>
        {footerData.map((item) => (
          <Link key={item.id} href={item.link} target="_blank">
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
