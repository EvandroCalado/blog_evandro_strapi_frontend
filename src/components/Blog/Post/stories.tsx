import { Meta, StoryFn } from '@storybook/react';
import Post, { PostProps } from '.';

import mock from '../../../utils/db.json';
const post = mock.data.posts.data[0];

export default {
  title: 'Components/Blog/Post',
  component: Post,
  args: {
    post,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PostProps> = (ars) => <Post {...ars} />;
