import { Meta, StoryFn } from '@storybook/react';
import Posts, { PostsProps } from '.';

import mock from '../../utils/db.json';
const posts = mock.data.posts;
const setting = mock.data.setting;

export default {
  title: 'Templates/Posts',
  component: Posts,
  args: {
    posts,
    setting,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PostsProps> = (args) => <Posts {...args} />;
