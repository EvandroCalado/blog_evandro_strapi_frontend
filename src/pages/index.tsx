import { GetStaticProps } from 'next';
import Head from 'next/head';
import { QUERIES_GET_POSTS } from '../graphql/queries';
import Posts from '../templates/Posts';
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
}

export default function Home({ posts, setting, variables }: HomeProps) {
  return (
    <>
      <Head>
        <title>{setting.data.attributes.blogName}</title>
        <meta
          name="description"
          content={setting.data.attributes.blogDescription}
        />
      </Head>
      <Posts posts={posts} setting={setting} variables={variables} />
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
    },
    revalidate: 60 * 60 * 24,
  };
};
