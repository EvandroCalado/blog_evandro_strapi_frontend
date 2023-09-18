import { Meta, StoryFn } from '@storybook/react';
import BlogLogo, { BlogLogoProps } from '.';

import mock from './mock';

export default {
  title: 'Components/BlogLogo',
  component: BlogLogo,
  args: mock,
} as Meta;

export const Default: StoryFn<BlogLogoProps> = (args) => <BlogLogo {...args} />;
