import { Setting } from '../../types/strapi';
import * as Styled from './styles';

export interface BlogLogoProps {
  setting: Setting;
}

export default function BlogLogo({ setting }: BlogLogoProps) {
  const { blogName } = setting.data.attributes;

  return (
    <Styled.Container>
      <Styled.Title>{blogName}</Styled.Title>
    </Styled.Container>
  );
}
