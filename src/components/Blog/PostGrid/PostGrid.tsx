import { Posts as StrapiPosts } from '../../../types/strapi';
import Heading from '../../Shared/Heading/Heading';
import PostCard from '../PostCard/PostCard';
import PostLatest from '../PostLatest/PostLatest';
import PostNotFound from '../PostNotFound/PostNotFound';
import * as Styled from './PostGrid.styles';

export interface PostGridProps {
  posts: StrapiPosts;
  gridTitle?: string;
}

export default function PostGrid({
  posts,
  gridTitle = 'Postagens Recentes',
}: PostGridProps) {
  if (posts.data.length === 0) {
    return <PostNotFound />;
  }

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
