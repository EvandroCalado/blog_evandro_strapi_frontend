import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Setting } from '../../types/strapi';
import * as Styled from './styles';

export interface BaseProps {
  children: React.ReactNode;
  setting: Setting;
}

export default function Base({ children, setting }: BaseProps) {
  return (
    <Styled.Container>
      <Header setting={setting} />
      {children}
      <Footer setting={setting} />
    </Styled.Container>
  );
}
