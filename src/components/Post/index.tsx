import { Post as StrapiPost } from '../../types/strapi';
import BlogArticleMeta from '../BlogArticleMeta';
import BlogAuthor from '../BlogAuthor';
import HtmlContent from '../BlogHtmlContent';
import Comments from '../Comments';
import Tags from '../Tags';
import * as Styled from './styles';

export interface PostProps {
  post: StrapiPost;
}

export default function Post({ post }: PostProps) {
  return (
    <Styled.Article>
      <BlogArticleMeta post={post} />
      <HtmlContent html={post.attributes.content} />
      <Tags tags={post.attributes.tags} />
      <BlogAuthor author={post.attributes.author} />
      <Comments
        id={post.id}
        slug={post.attributes.slug}
        title={post.attributes.title}
        allowComments={post.attributes.allowComments}
      />
    </Styled.Article>
  );
}
