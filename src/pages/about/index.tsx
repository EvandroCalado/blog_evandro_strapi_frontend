import { GetStaticProps } from 'next';
import { QUERIES_GET_ABOUT, QUERIES_GET_POSTS } from '../../graphql/queries';
import AboutTemplate from '../../templates/AboutTemplate/AboutTemplate';
import { Setting as SettingStrapi } from '../../types/strapi';
import { About as AboutStrapi } from '../../types/strapi-about';
import { loadPosts } from '../../utils/load-posts';

interface AboutPageProps {
  setting: SettingStrapi;
  about: AboutStrapi;
}

export default function AboutPage({ setting, about }: AboutPageProps) {
  return <AboutTemplate setting={setting} about={about} />;
}

export const getStaticProps: GetStaticProps = async () => {
  let data = null;
  let aboutsData = null;

  try {
    data = await loadPosts(QUERIES_GET_POSTS);
    aboutsData = await loadPosts(QUERIES_GET_ABOUT);
  } catch (error) {
    data = null;
    aboutsData = null;
  }

  if (!data || !aboutsData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: data.setting,
      about: aboutsData.abouts.data[0],
    },
    revalidate: 60 * 60 * 24,
  };
};
