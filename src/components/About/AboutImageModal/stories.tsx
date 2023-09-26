import { Meta, StoryFn } from '@storybook/react';
import AboutImageModal, { AboutImageModalProps } from '.';

import mock from '../../../utils/about.json';
const imageHobby = mock.data.abouts.data[0].attributes.imageHobby;

export default {
  title: 'Components/About/AboutImageModal',
  component: AboutImageModal,
  args: {
    imageHobby,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AboutImageModalProps> = (args) => (
  <AboutImageModal {...args} />
);
