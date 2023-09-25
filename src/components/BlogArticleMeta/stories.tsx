import { Meta, StoryFn } from '@storybook/react';
import BlogArticleMeta, { BlogArticleMetaProps } from '.';

import mock from '../../utils/db.json';
const post = mock.data.posts.data[0];

export default {
  title: 'Blog/BlogArticleMeta',
  component: BlogArticleMeta,
  args: {
    post,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<BlogArticleMetaProps> = (args) => (
  <BlogArticleMeta {...args} />
);
