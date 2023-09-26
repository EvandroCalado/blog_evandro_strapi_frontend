import { Posts as StrapiPosts } from '../../../types/strapi';
import PostCard from '../../Blog/PostCard';
import PostLatest from '../../Blog/PostLatest';
import Heading from '../../Shared/Heading';
import PostNotFound from '../PostNotFound';
import * as Styled from './styles';

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
