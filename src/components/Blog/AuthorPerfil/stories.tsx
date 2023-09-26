import { Meta, StoryFn } from '@storybook/react';
import AuthorPerfil, { AuthorPerfilProps } from '.';

import mock from '../../../utils/db.json';
const author = mock.data.posts.data[0].attributes.author;
const pagination = mock.data.posts.meta.pagination;

export default {
  title: 'Components/Blog/AuthorPerfil',
  component: AuthorPerfil,
  args: {
    author,
    pagination,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AuthorPerfilProps> = (args) => (
  <AuthorPerfil {...args} />
);
