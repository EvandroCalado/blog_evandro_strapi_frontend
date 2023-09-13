import { Meta, StoryFn } from '@storybook/react';
import PostCard, { PostCardProps } from '.';

import mock from '../../utils/db.json';
const post = mock.data.posts.data[0];

export default {
  title: 'Components/PostCard',
  component: PostCard,
  args: {
    post,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PostCardProps> = (args) => <PostCard {...args} />;
