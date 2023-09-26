import { Meta, StoryFn } from '@storybook/react';
import PostGrid, { PostGridProps } from '.';

import mock from '../../../utils/db.json';
const posts = mock.data.posts;

export default {
  title: 'Components/Blog/PostGrid',
  component: PostGrid,
  args: {
    posts,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PostGridProps> = (args) => <PostGrid {...args} />;
