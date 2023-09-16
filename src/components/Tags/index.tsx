import Link from 'next/link';
import { Tags as StrapiTags } from '../../types/strapi';
import * as Styled from './styles';

export interface TagsProps {
  tags: StrapiTags;
}

export default function Tags({ tags }: TagsProps) {
  return (
    <Styled.Container>
      <span>Tags: </span>
      {tags.data.map((tag) => (
        <Link key={tag.attributes.slug} href={`/tag/${tag.attributes.slug}`}>
          {tag.attributes.displayName}
        </Link>
      ))}
    </Styled.Container>
  );
}
