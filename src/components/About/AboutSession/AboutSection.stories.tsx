import { Meta, StoryFn } from '@storybook/react';
import AboutSection, { AboutSectionProps } from './AboutSection';

import mock from '../../../utils/about.json';
const about = mock.data.abouts.data[0];

export default {
  title: 'Components/About/AboutSection',
  component: AboutSection,
  args: {
    about,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AboutSectionProps> = (args) => (
  <AboutSection {...args} />
);
