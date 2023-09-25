import { Meta, StoryFn } from '@storybook/react';
import BlogAuthorPerfil, { BlogAuthorPerfilProps } from '.';

import mock from '../../utils/db.json';
const author = mock.data.posts.data[0].attributes.author;
const pagination = mock.data.posts.meta.pagination;

export default {
  title: 'Blog/BlogAuthorPerfil',
  component: BlogAuthorPerfil,
  args: {
    author,
    pagination,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<BlogAuthorPerfilProps> = (args) => (
  <BlogAuthorPerfil {...args} />
);
