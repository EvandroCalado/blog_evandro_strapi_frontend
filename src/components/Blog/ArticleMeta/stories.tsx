import { Meta, StoryFn } from '@storybook/react';
import ArticleMeta, { ArticleMetaProps } from '.';

import mock from '../../../utils/db.json';
const post = mock.data.posts.data[0];

export default {
  title: 'Components/Blog/ArticleMeta',
  component: ArticleMeta,
  args: {
    post,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ArticleMetaProps> = (args) => (
  <ArticleMeta {...args} />
);
