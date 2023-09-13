import { Meta, StoryFn } from '@storybook/react';
import HtmlContent, { HtmlContentProps } from '.';

import mock from '../../utils/db.json';
const content = mock.data.posts.data[3].attributes.content;

export default {
  title: 'Components/HtmlContent',
  component: HtmlContent,
  args: {
    html: content,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<HtmlContentProps> = (args) => (
  <HtmlContent {...args} />
);
