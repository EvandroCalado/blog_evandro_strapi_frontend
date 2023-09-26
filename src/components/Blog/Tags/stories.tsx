import { Meta, StoryFn } from '@storybook/react';
import Tags, { TagsProps } from '.';

import mock from '../../../utils/db.json';
const tags = mock.data.posts.data[0].attributes.tags;

export default {
  title: 'Components/Blog/Tags',
  component: Tags,
  args: {
    tags,
  },
} as Meta;

export const Default: StoryFn<TagsProps> = (args) => <Tags {...args} />;
