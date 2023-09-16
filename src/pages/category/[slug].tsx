import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { QUERIES_GET_POSTS_BY_CATEGORY } from '../../graphql/queries';
import Posts from '../../templates/Posts';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../../types/strapi';
import { loadPosts } from '../../utils/load-posts';

interface CategoryPageProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
}

export default function CategoryPage({ posts, setting }: CategoryPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const categoryName = posts.data[0].attributes.categories.data.filter(
    (category) => category.attributes.slug === router.query.slug,
  )[0].attributes.displayName;

  return (
    <>
      <Head>
        <title>{`Categoria: ${categoryName}`}</title>
      </Head>
      <Posts posts={posts} setting={setting} gridTitle={categoryName} />
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
    data = await loadPosts(QUERIES_GET_POSTS_BY_CATEGORY, {
      categorySlug: ctx.params?.slug as string,
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
