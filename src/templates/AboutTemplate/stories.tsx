import { Meta, StoryFn } from '@storybook/react';
import AboutTemplate, { AboutTemplateProps } from '.';

import aboutMock from '../../utils/about.json';
import mock from '../../utils/db.json';
const setting = mock.data.setting;
const about = aboutMock.data.abouts.data[0];

export default {
  title: 'Templates/Templates/AboutTemplate',
  component: AboutTemplate,
  args: {
    setting,
    about,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AboutTemplateProps> = (args) => (
  <AboutTemplate {...args} />
);
