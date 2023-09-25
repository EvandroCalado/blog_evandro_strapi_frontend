import Image from 'next/image';
import { Author as StrapiAuthor } from '../../types/strapi';
import Heading from '../Heading';
import LinkButton from '../LinkButton';
import * as Styled from './styles';

export interface BlogAuthorProps {
  author: StrapiAuthor;
}

export default function BlogAuthor({ author }: BlogAuthorProps) {
  const { displayName, slug, description, image } = author.data.attributes;

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Image
          src={image.data.attributes.formats.thumbnail.url}
          alt={displayName}
          fill
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
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
