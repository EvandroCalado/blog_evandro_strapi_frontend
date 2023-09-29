import { Meta, StoryFn } from '@storybook/react';
import HtmlContent, { HtmlContentProps } from './HtmlContent';

import mock from '../../../utils/projects.json';
const description = mock.data.projects.data[0].attributes.description;

export default {
  title: 'Components/Projects/HtmlContent',
  component: HtmlContent,
  args: {
    description,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<HtmlContentProps> = (args) => (
  <HtmlContent {...args} />
);
