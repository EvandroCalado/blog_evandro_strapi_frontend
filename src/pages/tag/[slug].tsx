import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { QUERIES_GET_POSTS_BY_TAG } from '../../graphql/queries';
import PostsTemplate from '../../templates/PostsTemplate/PostsTemplate';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../../types/strapi';
import {
  LoadPostsVariables,
  defaultVariables,
  loadPosts,
} from '../../utils/load-posts';

interface TagPageProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
  variables?: LoadPostsVariables;
  route?: string;
}

export default function TagPage({
  posts,
  setting,
  variables,
  route,
}: TagPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const tagName = posts.data[0].attributes.tags.data.filter(
    (tag) => tag.attributes.slug === router.query.slug,
  )[0].attributes.displayName;

  return (
    <>
      <Head>
        <title>{`Categoria: ${tagName}`}</title>
      </Head>
      <PostsTemplate
        posts={posts}
        setting={setting}
        gridTitle={tagName}
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
  const variables = { tagSlug: ctx.params?.slug as string };

  try {
    data = await loadPosts(QUERIES_GET_POSTS_BY_TAG, variables);
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
      route: 'tag',
    },
    revalidate: 60 * 60 * 24,
  };
};
