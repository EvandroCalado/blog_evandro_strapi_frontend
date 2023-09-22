import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { QUERIES_GET_POSTS_BY_CATEGORY } from '../../graphql/queries';
import PostsTemplate from '../../templates/PostsTemplate';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../../types/strapi';
import {
  LoadPostsVariables,
  defaultVariables,
  loadPosts,
} from '../../utils/load-posts';

interface CategoryPageProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
  variables?: LoadPostsVariables;
  route?: string;
}

export default function CategoryPage({
  posts,
  setting,
  variables,
  route,
}: CategoryPageProps) {
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
      <PostsTemplate
        posts={posts}
        setting={setting}
        gridTitle={categoryName}
        variables={variables}
        route={route}
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
  const variables = { categorySlug: ctx.params?.slug as string };

  try {
    data = await loadPosts(QUERIES_GET_POSTS_BY_CATEGORY, variables);
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
        ...variables,
      },
      route: 'category',
    },
    revalidate: 60 * 60 * 24,
  };
};
