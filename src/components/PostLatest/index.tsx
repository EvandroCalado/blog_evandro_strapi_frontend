import Image from 'next/image';
import Link from 'next/link';
import { Post as StrapiPost } from '../../types/strapi';
import { formatDate } from '../../utils/format-date';
import Heading from '../Heading';
import ReadingTime from '../ReadingTime';
import * as Styled from './styles';

export interface PostLatestProps {
  post: StrapiPost;
  reverse?: boolean;
}

export default function PostLatest({ post, reverse }: PostLatestProps) {
  const { cover, excerpt, title, content, createdAt } = post.attributes;
  const { formats } = cover.data[0].attributes;

  return (
    <Styled.Container reverse={reverse}>
      <Link href={`/post/${post.attributes.slug}`}>
        <Styled.ImageContainer>
          <Image
            src={formats.small.url}
            alt={formats.small.name}
            fill
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            priority={true}
          />
        </Styled.ImageContainer>
      </Link>
      <Styled.ContentContainer>
        <Link href={`/post/${post.attributes.slug}`}>
          <Heading as="h2">{title}</Heading>
        </Link>
        <Styled.Content>{excerpt}</Styled.Content>
        <Styled.DateContainer>
          <ReadingTime content={content} />
          <Styled.Date>{formatDate(createdAt)}</Styled.Date>
        </Styled.DateContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  );
}
