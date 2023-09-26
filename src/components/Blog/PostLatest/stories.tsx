import { Meta, StoryFn } from '@storybook/react';
import PostLatest, { PostLatestProps } from '.';

import mock from '../../../utils/db.json';
const post = mock.data.posts.data[0];

export default {
  title: 'Components/Blog/PostLatest',
  component: PostLatest,
  args: {
    post,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PostLatestProps> = (args) => (
  <PostLatest {...args} />
);

export const Reverse: StoryFn<PostLatestProps> = (args) => (
  <PostLatest {...args} reverse />
);
