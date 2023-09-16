import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { QUERIES_GET_POSTS_BY_AUTHOR } from '../../graphql/queries';
import AuthorPosts from '../../templates/AuthorPosts';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../../types/strapi';
import { loadPosts } from '../../utils/load-posts';

interface AuthorPageProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
}

export default function AuthorPage({ posts, setting }: AuthorPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>
          {`Author: ${posts.data[0].attributes.author.data.attributes.displayName}`}
        </title>
      </Head>
      <AuthorPosts
        posts={posts}
        setting={setting}
        gridTitle={`Postagens Recentes de ${posts.data[0].attributes.author.data.attributes.displayName}`}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPosts(QUERIES_GET_POSTS_BY_AUTHOR, {
      authorSlug: ctx.params?.slug as string,
    });
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
    },
    revalidate: 60 * 60 * 24,
  };
};
