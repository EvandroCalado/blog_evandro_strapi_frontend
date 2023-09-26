import { useState } from 'react';
import AuthorPerfil from '../../components/Blog/AuthorPerfil';
import PostGrid from '../../components/Blog/PostGrid';
import Button from '../../components/Shared/Button';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../../types/strapi';
import { LoadPostsVariables, loadPosts } from '../../utils/load-posts';
import { paginationQueries } from '../../utils/pagination-queries';
import Base from '../BaseTemplate';
import * as Styled from './styles';

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
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);

    const newVariables = {
      ...stateVariables,
      start: stateVariables!.start! + stateVariables!.limit!,
      limit: stateVariables!.limit,
    };

    const morePosts = await loadPosts(
      paginationQueries[route! as keyof typeof paginationQueries],
      newVariables,
    );

    if (!morePosts || !morePosts.posts.data || !morePosts.posts.data.length) {
      setNoMorePosts(true);
      return;
    }

    const posts = {
      ...statePosts,
      data: [...statePosts.data, ...morePosts.posts.data],
    };

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts(posts);
  };

  return (
    <Base setting={setting}>
      <AuthorPerfil
        author={posts.data[0].attributes.author}
        pagination={posts.meta.pagination}
      />
      <PostGrid posts={statePosts} gridTitle={gridTitle} />
      <Styled.ButtonContainer>
        <Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
          {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
        </Button>
      </Styled.ButtonContainer>
    </Base>
  );
}
