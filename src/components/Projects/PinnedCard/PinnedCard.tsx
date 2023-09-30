import { Project as StrapiProject } from '../../../types/strapi-projects';
import Heading from '../../Shared/Heading/Heading';
import Cover from '../Cover/Cover';
import HtmlContent from '../HtmlContent/HtmlContent';
import LinkButton from '../LinkButton/LinkButton';
import * as Styled from './PinnedCard.styles';

export interface PinnedCardProps {
  project: StrapiProject;
}

export default function PinnedCard({ project }: PinnedCardProps) {
  const { ProjectLink, cover, description, title } = project.attributes;
  return (
    <Styled.Container>
      <Cover cover={cover} />
      <Heading>{title}</Heading>
      <LinkButton projectLink={ProjectLink} />
      <HtmlContent description={description} />
    </Styled.Container>
  );
}
