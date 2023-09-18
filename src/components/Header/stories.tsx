import { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from '.';

import mock from '../../utils/db.json';

export default {
  title: 'Components/Header',
  component: Header,
  args: mock.data,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<HeaderProps> = (args) => <Header {...args} />;
