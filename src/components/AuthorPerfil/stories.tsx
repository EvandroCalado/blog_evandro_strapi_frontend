import { Meta, StoryFn } from '@storybook/react';
import AuthorPerfil, { AuthorPerfilProps } from '.';

import mock from '../../utils/db.json';
const author = mock.data.posts.data[0].attributes.author;

export default {
  title: 'Components/AuthorPerfil',
  component: AuthorPerfil,
  args: {
    author,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AuthorPerfilProps> = (args) => (
  <AuthorPerfil {...args} />
);
