import Image from 'next/image';
import { Author as StrapiAuthor } from '../../types/strapi';
import Heading from '../Heading';
import LinkButton from '../LinkButton';
import * as Styled from './styles';

export interface AuthorProps {
  author: StrapiAuthor;
}

export default function Author({ author }: AuthorProps) {
  const { displayName, slug, description, image } = author.data.attributes;

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Image
          src={image.data.attributes.formats.thumbnail.url}
          alt={displayName}
          fill
        />
      </Styled.ImageContainer>
      <Styled.ContentContainer>
        <Heading as="h2">{displayName}</Heading>
        <Styled.Content>{description}</Styled.Content>
        <LinkButton href={`/author/${slug}`}>ver perfil</LinkButton>
      </Styled.ContentContainer>
    </Styled.Container>
  );
}
