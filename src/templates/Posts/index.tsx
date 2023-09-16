import { useState } from 'react';
import Button from '../../components/Button';
import PostGrid from '../../components/PostGrid';
import { QUERIES_GET_POSTS } from '../../graphql/queries';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../../types/strapi';
import { LoadPostsVariables, loadPosts } from '../../utils/load-posts';
import Base from '../Base';
import * as Styled from './styles';

export interface PostsProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
  gridTitle?: string;
  variables?: LoadPostsVariables;
}

export default function Posts({
  posts,
  setting,
  gridTitle,
  variables,
}: PostsProps) {
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

    const morePosts = await loadPosts(QUERIES_GET_POSTS, newVariables);

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
      <PostGrid posts={statePosts} gridTitle={gridTitle} />
      <Styled.ButtonContainer>
        <Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
          {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
        </Button>
      </Styled.ButtonContainer>
    </Base>
  );
}
