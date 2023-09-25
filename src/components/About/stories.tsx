import { Meta, StoryFn } from '@storybook/react';
import About, { AboutProps } from '.';

import mock from '../../utils/about.json';
const about = mock.data.abouts.data[0];

export default {
  title: 'About/About',
  component: About,
  args: {
    about,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AboutProps> = (args) => <About {...args} />;
