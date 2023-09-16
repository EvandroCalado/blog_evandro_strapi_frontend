import Image from 'next/image';
import { Author as StrapiAuthor } from '../../types/strapi';
import Heading from '../Heading';
import * as Styled from './styles';

export interface AuthorPerfilProps {
  author: StrapiAuthor;
}

export default function AuthorPerfil({ author }: AuthorPerfilProps) {
  const { image, displayName, description } = author.data.attributes;
  const { url, name } = image.data.attributes;

  return (
    <Styled.Container>
      <Styled.ImageContaner>
        <Image src={url} alt={name} fill />
      </Styled.ImageContaner>
      <Heading>{displayName}</Heading>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Container>
  );
}
