import { Meta, StoryFn } from '@storybook/react';
import Author, { AuthorProps } from '.';

import mock from '../../../utils/db.json';
const author = mock.data.posts.data[0].attributes.author;

export default {
  title: 'Components/Blog/Author',
  component: Author,
  args: {
    author,
  },
} as Meta;

export const Default: StoryFn<AuthorProps> = (args) => <Author {...args} />;
