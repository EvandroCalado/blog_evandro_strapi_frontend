import { Meta, StoryFn } from '@storybook/react';
import BlogAuthor, { BlogAuthorProps } from '.';

import mock from '../../utils/db.json';
const author = mock.data.posts.data[0].attributes.author;

export default {
  title: 'Blog/BlogAuthor',
  component: BlogAuthor,
  args: {
    author,
  },
} as Meta;

export const Default: StoryFn<BlogAuthorProps> = (args) => (
  <BlogAuthor {...args} />
);
