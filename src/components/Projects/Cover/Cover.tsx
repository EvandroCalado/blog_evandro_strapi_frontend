import Image from 'next/image';
import { Cover as StrapiCover } from '../../../types/strapi';
import * as Styled from './Cover.styles';

export interface CoverProps {
  cover: StrapiCover;
}

export default function Cover({ cover }: CoverProps) {
  const { formats } = cover.data[0].attributes;
  return (
    <Styled.Container>
      {<Image src={formats.medium.url} alt={formats.medium.name} fill />}
    </Styled.Container>
  );
}
