import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IconMenu } from '../../../icons/icon-menu';
import { IconSearch } from '../../../icons/icon-search';
import { IconX } from '../../../icons/icon-x';
import { Setting } from '../../../types/strapi';
import Logo from '../Logo/Logo';
import Toggle from '../Toggle/Toggle';
import * as Styled from './Header.styles';

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
            {IconX}
          </span>
        ) : (
          <span onClick={() => setShowMenu(!showMenu)} data-testid="menu">
            {IconMenu}
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
          {IconSearch}
        </Styled.SearchContainer>
      </Styled.NavContainer>
    </Styled.HeaderContainer>
  );
}
