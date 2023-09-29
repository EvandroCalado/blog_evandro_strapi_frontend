import { Meta, StoryFn } from '@storybook/react';
import PostsTemplate, { PostsTemplateProps } from './PostsTemplate';

import mock from '../../utils/db.json';
const posts = mock.data.posts;
const setting = mock.data.setting;

export default {
  title: 'Templates/Templates/PostsTemplate',
  component: PostsTemplate,
  args: {
    posts,
    setting,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PostsTemplateProps> = (args) => (
  <PostsTemplate {...args} />
);
