import { Post as StrapiPost } from '../../types/strapi';
import ArticleMeta from '../ArticleMeta';
import Author from '../Author';
import Comments from '../Comments';
import HtmlContent from '../HtmlContent';
import Tags from '../Tags';
import * as Styled from './styles';

export interface PostProps {
  post: StrapiPost;
}

export default function Post({ post }: PostProps) {
  return (
    <Styled.Article>
      <ArticleMeta post={post} />
      <HtmlContent html={post.attributes.content} />
      <Tags tags={post.attributes.tags} />
      <Author author={post.attributes.author} />
      <Comments
        id={post.id}
        slug={post.attributes.slug}
        title={post.attributes.title}
        allowComments={post.attributes.allowComments}
      />
    </Styled.Article>
  );
}
