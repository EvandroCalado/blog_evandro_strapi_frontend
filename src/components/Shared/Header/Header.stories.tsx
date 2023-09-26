import { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from './Header';

import mock from '../../../utils/db.json';

export default {
  title: 'Components/Shared/Header',
  component: Header,
  args: mock.data,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<HeaderProps> = (args) => <Header {...args} />;
