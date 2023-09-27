import { Meta, StoryFn } from '@storybook/react';
import AuthorTemplate, { AuthorTemplateProps } from './AuthorTemplate';

import mock from '../../utils/db.json';
const posts = mock.data.posts;
const setting = mock.data.setting;
const gridTitle = 'Postagens Recentes de Evandro Calado';

export default {
  title: 'Templates/Templates/AuthorTemplate',
  component: AuthorTemplate,
  args: {
    posts,
    setting,
    gridTitle,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AuthorTemplateProps> = (args) => (
  <AuthorTemplate {...args} />
);
