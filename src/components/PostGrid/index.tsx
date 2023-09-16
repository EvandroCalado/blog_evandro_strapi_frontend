import { Posts as StrapiPosts } from '../../types/strapi';
import Heading from '../Heading';
import PostCard from '../PostCard';
import PostLatest from '../PostLatest';
import * as Styled from './styles';

export interface PostGridProps {
  posts: StrapiPosts;
  gridTitle?: string;
}

export default function PostGrid({
  posts,
  gridTitle = 'Postagens Recentes',
}: PostGridProps) {
  const postsSlice = posts.data.slice(1);

  return (
    <Styled.Container>
      <Heading>{gridTitle}</Heading>
      <Styled.GridContainer>
        {<PostLatest post={posts.data[0]} />}
        {postsSlice.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Styled.GridContainer>
    </Styled.Container>
  );
}
