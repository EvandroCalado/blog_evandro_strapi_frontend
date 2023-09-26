import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import icons from '../../../icons';
import { Setting } from '../../../types/strapi';
import Toggle from '../../Shared/Toggle';
import Logo from '../Logo';
import * as Styled from './styles';

export interface HeaderProps {
  setting: Setting;
  showMenu?: boolean;
}

export default function Header({ setting }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const { menuLink } = setting.data.attributes;

  return (
    <Styled.HeaderContainer>
      {<Logo setting={setting} />}
      <Styled.NavContainer>
        {showMenu ? (
          <span onClick={() => setShowMenu(!showMenu)} data-testid="close">
            {icons.x}
          </span>
        ) : (
          <span onClick={() => setShowMenu(!showMenu)} data-testid="menu">
            {icons.menu}
          </span>
        )}

        <Styled.Nav showMenu={showMenu}>
          {menuLink.map((link) => (
            <Link key={link.id} href={link.link}>
              {link.text}
            </Link>
          ))}
          <Toggle />
        </Styled.Nav>
        <Styled.SearchContainer action="/search/" method="GET">
          <Styled.Input
            placeholder="Pesquisar"
            type="search"
            name="q"
            defaultValue={router.query.q}
          />
          {icons.search}
        </Styled.SearchContainer>
      </Styled.NavContainer>
    </Styled.HeaderContainer>
  );
}
