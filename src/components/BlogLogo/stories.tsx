import { Meta, StoryFn } from '@storybook/react';
import BlogLogo, { BlogLogoProps } from '.';

import mock from '../../utils/db.json';
const setting = mock.data.setting;

export default {
  title: 'Blog/BlogLogo',
  component: BlogLogo,
  args: {
    setting,
  },
} as Meta;

export const Default: StoryFn<BlogLogoProps> = (args) => <BlogLogo {...args} />;
