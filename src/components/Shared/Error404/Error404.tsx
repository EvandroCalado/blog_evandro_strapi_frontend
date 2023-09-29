'use client';

import Link from 'next/link';
import * as Styled from './Error404.styles';

export default function Error404() {
  return (
    <Styled.Container>
      <Styled.Title>Erro 404</Styled.Title>
      <Styled.Title2>Página não encontrada !</Styled.Title2>
      <Link href={'/'}>Voltar para a home</Link>
    </Styled.Container>
  );
}
