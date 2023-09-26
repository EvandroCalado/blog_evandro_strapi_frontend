import Image from 'next/image';
import { Pagination, Author as StrapiAuthor } from '../../../types/strapi';
import Heading from '../../Shared/Heading';
import * as Styled from './styles';

export interface AuthorPerfilProps {
  author: StrapiAuthor;
  pagination: Pagination;
}

export default function AuthorPerfil({
  author,
  pagination,
}: AuthorPerfilProps) {
  const { image, displayName, description } = author.data.attributes;
  const { url, name } = image.data.attributes;

  return (
    <Styled.Container>
      <Styled.ImageContaner>
        <Image
          src={url}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          priority={true}
        />
      </Styled.ImageContaner>
      <Styled.Span>Postagens: {pagination.total}</Styled.Span>
      <Heading>{displayName}</Heading>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Container>
  );
}
