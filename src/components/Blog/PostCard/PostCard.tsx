import Image from 'next/image';
import Link from 'next/link';
import { Post as StrapiPost } from '../../../types/strapi';
import { formatDate } from '../../../utils/format-date';
import Heading from '../../Shared/Heading/Heading';
import ReadingTime from '../ReadingTime/ReadingTime';
import * as Styled from './PostCard.styles';

export interface PostCardProps {
  post: StrapiPost;
}

export default function PostCard({ post }: PostCardProps) {
  const { cover, excerpt, title, content, createdAt } = post.attributes;
  const { formats } = cover.data[0].attributes;

  return (
    <Styled.Container>
      <Link href={`/post/${post.attributes.slug}`}>
        <Styled.ImageContainer>
          <Image
            src={formats.small.url}
            alt={formats.small.name}
            fill
            sizes="320px"
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
