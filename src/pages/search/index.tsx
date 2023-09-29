import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { QUERIES_GET_POSTS_BY_TITLE } from '../../graphql/queries';
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

interface SearchPageProps {
  posts: StrapiPosts;
  setting: StrapiSetting;
  variables?: LoadPostsVariables;
  route?: string;
}

export default function SearchPage({
  posts,
  setting,
  variables,
  route,
}: SearchPageProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`Pesquisa: ${router.query.q}`}</title>
      </Head>
      <PostsTemplate
        posts={posts}
        setting={setting}
        gridTitle={router.query.q as string}
        variables={variables}
        route={route}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let data = null;
  const query = ctx.query?.q || '';

  if (!query) {
    return {
      notFound: true,
    };
  }

  const variables = { postTitle: query as string };

  try {
    data = await loadPosts(QUERIES_GET_POSTS_BY_TITLE, variables);
  } catch (error) {
    data = null;
  }

  if (!data || !data.posts) {
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
      route: 'title',
    },
  };
};
