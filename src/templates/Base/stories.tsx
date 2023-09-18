import { Meta, StoryFn } from '@storybook/react';
import Base, { BaseProps } from '.';

import mock from '../../utils/db.json';
const setting = mock.data.setting;

export default {
  title: 'Templates/Base',
  component: Base,
  args: {
    children: 'Conteúdo',
    setting,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<BaseProps> = (args) => <Base {...args} />;
