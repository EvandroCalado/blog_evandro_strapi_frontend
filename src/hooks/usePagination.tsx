import { useState } from 'react';
import {
  QUERIES_GET_POSTS,
  QUERIES_GET_POSTS_BY_AUTHOR,
  QUERIES_GET_POSTS_BY_CATEGORY,
  QUERIES_GET_POSTS_BY_SLUG,
  QUERIES_GET_POSTS_BY_TAG,
  QUERIES_GET_POSTS_BY_TITLE,
} from '../graphql/queries';
import { Posts as StrapiPosts } from '../types/strapi';
import { LoadPostsVariables, loadPosts } from '../utils/load-posts';

const paginationQueries = {
  allPosts: QUERIES_GET_POSTS,
  author: QUERIES_GET_POSTS_BY_AUTHOR,
  category: QUERIES_GET_POSTS_BY_CATEGORY,
  tag: QUERIES_GET_POSTS_BY_TAG,
  title: QUERIES_GET_POSTS_BY_TITLE,
  slug: QUERIES_GET_POSTS_BY_SLUG,
};

const usePagination = (
  posts: StrapiPosts,
  variables: LoadPostsVariables | undefined,
  route: string | undefined,
) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [loading, setLoading] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setLoading(true);

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
      setLoading(false);
      return;
    }

    const posts = {
      ...statePosts,
      data: [...statePosts.data, ...morePosts.posts.data],
    };

    setStateVariables(newVariables);
    setStatePosts(posts);
    setLoading(false);
  };

  return {
    handleLoadMorePosts,
    noMorePosts,
    statePosts,
    loading,
  };
};

export default usePagination;
