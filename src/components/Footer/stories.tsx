import { Meta, StoryFn } from '@storybook/react';
import Footer, { FooterProps } from '.';

import mock from '../../utils/db.json';
const setting = mock.data.setting;

export default {
  title: 'Shared/Footer',
  component: Footer,
  args: {
    setting,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<FooterProps> = (args) => <Footer {...args} />;
