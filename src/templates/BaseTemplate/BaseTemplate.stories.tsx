import { Meta, StoryFn } from '@storybook/react';
import BaseTemplate, { BaseTemplateProps } from './BaseTemplate';

import mock from '../../utils/db.json';
const setting = mock.data.setting;

export default {
  title: 'Templates/Templates/BaseTemplate',
  component: BaseTemplate,
  args: {
    children: 'Conteúdo',
    setting,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<BaseTemplateProps> = (args) => (
  <BaseTemplate {...args} />
);
