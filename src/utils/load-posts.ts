import { request } from 'graphql-request';
import { Posts, Setting } from '../types/strapi';

export interface LoadPostsProps {
  posts: Posts;
  setting: Setting;
}

export interface LoadPostsVariables {
  sort?: string;
  postSlug?: string;
  authorSlug?: string;
  categorySlug?: string;
  tagSlug?: string;
  postTitle?: string;
  start?: number;
  limit?: number;
}

export const defaultVariables: LoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 2,
};

export const loadPosts = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queries: any,
  variables: LoadPostsVariables = {},
) => {
  const data: LoadPostsProps = await request(
    process.env.NEXT_PUBLIC_GRAPHQL_URL!,
    queries,
    {
      ...defaultVariables,
      ...variables,
    },
  );

  return data;
};
