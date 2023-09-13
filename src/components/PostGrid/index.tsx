import { Posts as StrapiPosts } from '../../types/strapi';
import PostCard from '../PostCard';
import * as Styled from './styles';

export interface PostGridProps {
  posts: StrapiPosts;
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <Styled.Container>
      {posts.data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Styled.Container>
  );
}
