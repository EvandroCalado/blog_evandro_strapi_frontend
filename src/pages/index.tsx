import { GetStaticProps } from 'next';
import Head from 'next/head';
import { QUERIES_GET_POSTS } from '../graphql/queries';
import PostsTemplate from '../templates/PostsTemplate/PostsTemplate';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../types/strapi';
import {
  LoadPostsVariables,
  defaultVariables,
  loadPosts,
} from '../utils/load-posts';

interface HomeProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
  variables?: LoadPostsVariables;
  route?: string;
}

export default function Home({ posts, setting, variables, route }: HomeProps) {
  return (
    <>
      <Head>
        <title>{setting.data.attributes.blogName}</title>
        <meta
          name="description"
          content={setting.data.attributes.blogDescription}
        />
      </Head>
      <PostsTemplate
        posts={posts}
        setting={setting}
        variables={variables}
        route={route}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let data = null;

  try {
    data = await loadPosts(QUERIES_GET_POSTS);
  } catch (error) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultVariables,
      },
      route: 'allPosts',
    },
    revalidate: 60 * 60 * 24,
  };
};
