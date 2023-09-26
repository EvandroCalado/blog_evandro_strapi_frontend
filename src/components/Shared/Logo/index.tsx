import { Setting } from '../../../types/strapi';
import * as Styled from './styles';

export interface LogoProps {
  setting: Setting;
}

export default function Logo({ setting }: LogoProps) {
  const { blogName } = setting.data.attributes;

  return (
    <Styled.Container>
      <Styled.Title>{blogName}</Styled.Title>
    </Styled.Container>
  );
}
