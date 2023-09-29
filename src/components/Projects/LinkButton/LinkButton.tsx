import Link from 'next/link';
import {
  IconArticle,
  IconGithub,
  IconStorybook,
  IconStrapi,
  IconVercel,
} from '../../../icons';
import { ProjectLink as StrapiProjectLink } from '../../../types/strapi-projects';
import * as Styled from './LinkButton.styles';

export interface LinkButtonProps {
  projectLink: StrapiProjectLink[];
  color?: string;
}

interface IconProps {
  [key: string]: React.ReactNode;
  Github: React.ReactNode;
  Vercel: React.ReactNode;
  Strapi: React.ReactNode;
  Storybook: React.ReactNode;
  Blog: React.ReactNode;
}

const icon: IconProps = {
  Github: IconGithub,
  Vercel: IconVercel,
  Strapi: IconStrapi,
  Storybook: IconStorybook,
  Blog: IconArticle,
};

export default function LinkButton({ projectLink }: LinkButtonProps) {
  return (
    <Styled.Container>
      {projectLink.map((item) => (
        <Link
          href={item.link}
          key={item.id}
          style={{ backgroundColor: item.project_host.data.attributes.color }}
          target="_blank"
        >
          {icon[item.project_host.data.attributes.displayName]}
          {item.project_host.data.attributes.displayName}
        </Link>
      ))}
    </Styled.Container>
  );
}
