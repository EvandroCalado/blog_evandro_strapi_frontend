import AuthorPerfil from '../../components/AuthorPerfil';
import PostGrid from '../../components/PostGrid';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../../types/strapi';
import Base from '../Base';

export interface AuthorPostsProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
  gridTitle?: string;
}

export default function AuthorPosts({
  posts,
  setting,
  gridTitle,
}: AuthorPostsProps) {
  return (
    <Base setting={setting}>
      <AuthorPerfil author={posts.data[0].attributes.author} />
      <PostGrid posts={posts} gridTitle={gridTitle} />
    </Base>
  );
}
