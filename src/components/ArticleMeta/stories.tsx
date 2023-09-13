import { Meta, StoryFn } from '@storybook/react';
import ArticleMeta, { ArticleMetaProps } from '.';

import mock from '../../utils/db.json';
const categories = mock.data.posts.data[0].attributes.categories;
const cover = mock.data.posts.data[0].attributes.cover;
const content = mock.data.posts.data[0].attributes.content;
const title = mock.data.posts.data[0].attributes.title;
const createdAt = mock.data.posts.data[0].attributes.createdAt;
const coverResource = mock.data.posts.data[0].attributes.coverResource;
const coverResourceUrl = mock.data.posts.data[0].attributes.coverResourceUrl;

export default {
  title: 'Components/ArticleMeta',
  component: ArticleMeta,
  args: {
    categories,
    cover,
    coverResource,
    coverResourceUrl,
    content,
    title,
    createdAt,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ArticleMetaProps> = (args) => (
  <ArticleMeta {...args} />
);
