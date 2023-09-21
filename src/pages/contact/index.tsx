import { GetStaticProps } from 'next';
import ComingSoon from '../../components/ComingSoon';
import { QUERIES_GET_POSTS } from '../../graphql/queries';
import Base from '../../templates/Base';
import { Setting } from '../../types/strapi';
import { loadPosts } from '../../utils/load-posts';

interface ContactProps {
  setting: Setting;
}

export default function Contact({ setting }: ContactProps) {
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
