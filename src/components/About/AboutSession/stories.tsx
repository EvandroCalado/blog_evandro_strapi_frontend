import { Meta, StoryFn } from '@storybook/react';
import AboutSession, { AboutSessionProps } from '.';

import mock from '../../../utils/about.json';
const about = mock.data.abouts.data[0];

export default {
  title: 'Components/About/AboutSession',
  component: AboutSession,
  args: {
    about,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AboutSessionProps> = (args) => (
  <AboutSession {...args} />
);
