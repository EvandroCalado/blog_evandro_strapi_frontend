import { Meta, StoryFn } from '@storybook/react';
import PostTemplate, { PostTemplateProps } from '.';

import mock from '../../utils/db.json';
const setting = mock.data.setting;
const post = mock.data.posts.data[0];

export default {
  title: 'Templates/PostTemplate',
  component: PostTemplate,
  args: {
    setting,
    post,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PostTemplateProps> = (args) => (
  <PostTemplate {...args} />
);
