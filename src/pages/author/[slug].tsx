import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { QUERIES_GET_POSTS_BY_AUTHOR } from '../../graphql/queries';
import AuthorTemplate from '../../templates/AuthorTemplate';
import {
  Posts as StrapiPosts,
  Setting as StrapiSetting,
} from '../../types/strapi';
import {
  LoadPostsVariables,
  defaultVariables,
  loadPosts,
} from '../../utils/load-posts';

interface AuthorPageProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
  variables?: LoadPostsVariables;
  route?: string;
}

export default function AuthorPage({
  posts,
  setting,
  variables,
  route,
}: AuthorPageProps) {
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
      <AuthorTemplate
        posts={posts}
        setting={setting}
        gridTitle={`Postagens Recentes de ${posts.data[0].attributes.author.data.attributes.displayName}`}
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
  const variables = { authorSlug: ctx.params?.slug as string };

  try {
    data = await loadPosts(QUERIES_GET_POSTS_BY_AUTHOR, variables);
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
      route: 'author',
    },
    revalidate: 60 * 60 * 24,
  };
};
