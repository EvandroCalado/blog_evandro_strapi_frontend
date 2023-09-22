import Footer from '../../components/Footer';
import GoToTop from '../../components/GoToTop';
import Header from '../../components/Header';
import { Setting } from '../../types/strapi';

export interface BaseTemplateProps {
  children: React.ReactNode;
  setting: Setting;
}

export default function BaseTemplate({ children, setting }: BaseTemplateProps) {
  return (
    <>
      <Header setting={setting} />
      {children}
      <GoToTop />
      <Footer setting={setting} />
    </>
  );
}
