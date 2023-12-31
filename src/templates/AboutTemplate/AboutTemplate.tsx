import AboutSection from '../../components/About/AboutSession/AboutSection';
import { Setting as SettingStrapi } from '../../types/strapi';
import { About as AboutStrapi } from '../../types/strapi-about';
import Base from '../BaseTemplate/BaseTemplate';

export interface AboutTemplateProps {
  setting: SettingStrapi;
  about: AboutStrapi;
}

export default function AboutTemplate({ setting, about }: AboutTemplateProps) {
  return (
    <>
      <Base setting={setting}>
        <AboutSection about={about} />
      </Base>
    </>
  );
}
