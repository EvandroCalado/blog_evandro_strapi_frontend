import Image from 'next/image';
import Link from 'next/link';
import { Post as StrapiPost } from '../../types/strapi';
import { formatDate } from '../../utils/format-date';
import Categories from '../Categories';
import Heading from '../Heading';
import ReadingTime from '../ReadingTime';
import * as Styled from './styles';

export interface ArticleMetaProps {
  post: StrapiPost;
}

export default function ArticleMeta({ post }: ArticleMetaProps) {
  const {
    title,
    cover,
    coverResource,
    coverResourceUrl,
    categories,
    content,
    createdAt,
  } = post.attributes;
  const { url, name } = cover.data[0].attributes.formats.medium;

  return (
    <Styled.Container>
      <Styled.Image>
        <Image src={url} alt={name} fill priority={true} />
      </Styled.Image>
      <span>
        Fonte:
        <Link href={coverResourceUrl} target="_blank">
          {coverResource}
        </Link>
      </span>
      <Heading>{title}</Heading>
      <Styled.ArticleContainer>
        <Categories categories={categories} />
        <Styled.DateContainer>
          {formatDate(createdAt)}
          <ReadingTime content={content} />
        </Styled.DateContainer>
      </Styled.ArticleContainer>
    </Styled.Container>
  );
}
