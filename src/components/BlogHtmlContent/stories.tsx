import { Meta, StoryFn } from '@storybook/react';
import BlogHtmlContent, { BlogHtmlContentProps } from '.';

import mock from '../../utils/db.json';
const content = mock.data.posts.data[3].attributes.content;

export default {
  title: 'Blog/BlogHtmlContent',
  component: BlogHtmlContent,
  args: {
    html: content,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<BlogHtmlContentProps> = (args) => (
  <BlogHtmlContent {...args} />
);
