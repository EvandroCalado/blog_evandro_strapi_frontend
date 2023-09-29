import Footer from '../../components/Shared/Footer/Footer';
import GoToTop from '../../components/Shared/GoToTop/GoToTop';
import Header from '../../components/Shared/Header/Header';
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
