import Image from 'next/image';
import Link from 'next/link';
import { Post as StrapiPost } from '../../types/strapi';
import { formatDate } from '../../utils/format-date';
import Categories from '../Categories';
import Heading from '../Heading';
import ReadingTime from '../ReadingTime';
import * as Styled from './styles';

export interface PostCardProps {
  post: StrapiPost;
}

export default function PostCard({ post }: PostCardProps) {
  const { cover, excerpt, title, categories, content, createdAt } =
    post.attributes;
  const { formats } = cover.data[0].attributes;

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Image src={formats.small.url} alt={formats.small.name} fill />
      </Styled.ImageContainer>
      <Styled.ContentContainer>
        <Link href={`/posts/${post.attributes.slug}`}>
          <Heading as="h2">{title}</Heading>
        </Link>
        <Categories categories={categories} />
        <Styled.Content>{excerpt}</Styled.Content>
        <Styled.DateContainer>
          <ReadingTime content={content} />
          <Styled.Date>{formatDate(createdAt)}</Styled.Date>
        </Styled.DateContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  );
}
