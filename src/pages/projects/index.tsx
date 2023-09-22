import { GetStaticProps } from 'next';
import ComingSoon from '../../components/ComingSoon';
import { QUERIES_GET_POSTS } from '../../graphql/queries';
import Base from '../../templates/BaseTemplate';
import { Setting } from '../../types/strapi';
import { loadPosts } from '../../utils/load-posts';

interface ProjectsPageProps {
  setting: Setting;
}

export default function ProjectsPage({ setting }: ProjectsPageProps) {
  return (
    <Base setting={setting}>
      <ComingSoon />
    </Base>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let data = null;

  try {
    data = await loadPosts(QUERIES_GET_POSTS);
  } catch (error) {
    data = null;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: data.setting,
    },
    revalidate: 60 * 60 * 24,
  };
};
