import { Meta, StoryFn } from '@storybook/react';
import Logo, { LogoProps } from './Logo';

import mock from '../../../utils/db.json';
const setting = mock.data.setting;

export default {
  title: 'Components/Shared/Logo',
  component: Logo,
  args: {
    setting,
  },
} as Meta;

export const Default: StoryFn<LogoProps> = (args) => <Logo {...args} />;
