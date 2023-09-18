import Image from 'next/image';
import Link from 'next/link';
import { Cover, Categories as StrapiCategories } from '../../types/strapi';
import { formatDate } from '../../utils/format-date';
import Categories from '../Categories';
import Heading from '../Heading';
import ReadingTime from '../ReadingTime';
import * as Styled from './styles';

export interface ArticleMetaProps {
  categories: StrapiCategories;
  cover: Cover;
  coverResource: string;
  coverResourceUrl: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function ArticleMeta({
  categories,
  cover,
  coverResource,
  coverResourceUrl,
  title,
  content,
  createdAt,
}: ArticleMetaProps) {
  const { url, name, width, height } = cover.data[0].attributes;

  return (
    <Styled.Container>
      <Styled.Image>
        <Image
          src={url}
          alt={name}
          width={width}
          height={height}
          priority={true}
        />
      </Styled.Image>
      <span>
        Fonte:
        <Link href={coverResourceUrl}>{coverResource}</Link>
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
