import { Meta, StoryFn } from '@storybook/react';
import AuthorPosts, { AuthorPostsProps } from '.';

import mock from '../../utils/db.json';
const posts = mock.data.posts;
const setting = mock.data.setting;
const gridTitle = 'Postagens Recentes de Evandro Calado';

export default {
  title: 'Templates/AuthorPosts',
  component: AuthorPosts,
  args: {
    posts,
    setting,
    gridTitle,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AuthorPostsProps> = (args) => (
  <AuthorPosts {...args} />
);
