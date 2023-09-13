'use client';

import Link from 'next/link';
import { useState } from 'react';
import icons from '../../icons';
import { Setting } from '../../types/strapi';
import BlogLogo from '../Logo';
import * as Styled from './styles';

export interface HeaderProps {
  setting: Setting;
  showMenu?: boolean;
}

export default function Header({ setting }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false);

  const { menuLink } = setting.data.attributes;

  return (
    <Styled.HeaderContainer>
      {<BlogLogo setting={setting} />}
      <Styled.NavContainer>
        {showMenu ? (
          <span onClick={() => setShowMenu(!showMenu)}>{icons.x}</span>
        ) : (
          <span onClick={() => setShowMenu(!showMenu)}>{icons.menu}</span>
        )}

        <Styled.Nav showMenu={showMenu}>
          {menuLink.map((link) => (
            <Link key={link.id} href={link.link}>
              {link.text}
            </Link>
          ))}
        </Styled.Nav>
        <Styled.SearchContainer>
          <Styled.Input placeholder="Pesquisar" />
          {icons.search}
        </Styled.SearchContainer>
      </Styled.NavContainer>
    </Styled.HeaderContainer>
  );
}
