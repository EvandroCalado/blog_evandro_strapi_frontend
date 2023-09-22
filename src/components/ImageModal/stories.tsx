import { Meta, StoryFn } from '@storybook/react';
import ImageModal, { ImageModalProps } from '.';

import mock from '../../utils/about.json';
const imageHobby = mock.data.abouts.data[0].attributes.imageHobby;

export default {
  title: 'Components/ImageModal',
  component: ImageModal,
  args: {
    imageHobby,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ImageModalProps> = (args) => (
  <ImageModal {...args} />
);
