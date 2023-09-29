import { Meta, StoryFn } from '@storybook/react';
import LinkButton, { LinkButtonProps } from './LinkButton';

import mock from '../../../utils/projects.json';
const projectLink = mock.data.projects.data[0].attributes.ProjectLink;

export default {
  title: 'Components/Projects/LinkButton',
  component: LinkButton,
  args: {
    projectLink,
  },
} as Meta;

export const Default: StoryFn<LinkButtonProps> = (args) => (
  <LinkButton {...args} />
);
