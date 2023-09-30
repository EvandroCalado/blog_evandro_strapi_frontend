import Link from 'next/link';
import { IconLink } from '../../../icons';
import { ProjectLink as StrapiProjectLink } from '../../../types/strapi-projects';
import * as Styled from './LinkButton.styles';

export interface LinkButtonProps {
  projectLink: StrapiProjectLink[];
  color?: string;
}

export default function LinkButton({ projectLink }: LinkButtonProps) {
  return (
    <Styled.Container>
      {projectLink.map((item) => (
        <Link
          href={item.link}
          key={item.id}
          style={{ color: item.project_host.data.attributes.color }}
          target="_blank"
        >
          {IconLink}
          {item.project_host.data.attributes.displayName}
        </Link>
      ))}
    </Styled.Container>
  );
}
