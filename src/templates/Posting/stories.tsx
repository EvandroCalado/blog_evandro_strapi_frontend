import { Meta, StoryFn } from '@storybook/react';
import Posting, { PostingProps } from '.';

import mock from '../../utils/db.json';
const setting = mock.data.setting;
const post = mock.data.posts.data[0];

export default {
  title: 'Templates/Posting',
  component: Posting,
  args: {
    setting,
    post,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PostingProps> = (args) => <Posting {...args} />;
