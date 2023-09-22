import About from '../../components/About';
import { Setting as SettingStrapi } from '../../types/strapi';
import { About as AboutStrapi } from '../../types/strapi-about';
import Base from '../BaseTemplate';

export interface AboutTemplateProps {
  setting: SettingStrapi;
  about: AboutStrapi;
}

export default function AboutTemplate({ setting, about }: AboutTemplateProps) {
  return (
    <>
      <Base setting={setting}>
        <About about={about} />
      </Base>
    </>
  );
}
