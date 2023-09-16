import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  QUERIES_GET_POSTS,
  QUERIES_GET_POSTS_BY_SLUG,
} from '../../graphql/queries';
import Posting from '../../templates/Posting';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../../types/strapi';
import { loadPosts } from '../../utils/load-posts';

interface PostPageProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
}

export default function PostPage({ posts, setting }: PostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{posts.data[0].attributes.title}</title>
        <meta name="description" content={posts.data[0].attributes.excerpt} />
      </Head>
      <Posting post={posts.data[0]} setting={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data = null;
  let paths: { params: { slug: string } }[] = [];

  try {
    data = await loadPosts(QUERIES_GET_POSTS);
    paths = data.posts.data.map((post) => ({
      params: { slug: post.attributes.slug },
    }));
  } catch (error) {
    data = null;
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPosts(QUERIES_GET_POSTS_BY_SLUG, {
      postSlug: ctx.params?.slug as string,
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
