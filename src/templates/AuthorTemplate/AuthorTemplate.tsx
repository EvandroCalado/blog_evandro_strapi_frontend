import AuthorPerfil from '../../components/Blog/AuthorPerfil/AuthorPerfil';
import PostGrid from '../../components/Blog/PostGrid/PostGrid';
import Button from '../../components/Shared/Button/Button';
import Loading from '../../components/Shared/Loading/Loading';
import usePagination from '../../hooks/usePagination';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../../types/strapi';
import { LoadPostsVariables } from '../../utils/load-posts';
import Base from '../BaseTemplate/BaseTemplate';
import * as Styled from './AuthorTemplate.styles';

export interface AuthorTemplateProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
  gridTitle?: string;
  variables?: LoadPostsVariables;
  route?: string;
}

export default function AuthorTemplate({
  posts,
  setting,
  gridTitle,
  variables,
  route,
}: AuthorTemplateProps) {
  const { handleLoadMorePosts, loading, noMorePosts, statePosts } =
    usePagination(posts, variables, route);

  return (
    <Base setting={setting}>
      <AuthorPerfil
        author={posts.data[0].attributes.author}
        pagination={posts.meta.pagination}
      />
      <PostGrid posts={statePosts} gridTitle={gridTitle} />
      <Styled.ButtonContainer>
        {statePosts.data.length === 0 ? null : (
          <Button
            onClick={handleLoadMorePosts}
            disabled={noMorePosts}
            width="200px"
          >
            {loading ? (
              <Loading size="15px" />
            ) : noMorePosts ? (
              'Sem mais posts'
            ) : (
              'Carregar mais'
            )}
          </Button>
        )}
      </Styled.ButtonContainer>
    </Base>
  );
}
