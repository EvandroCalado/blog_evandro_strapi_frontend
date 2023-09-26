import { Meta, StoryFn } from '@storybook/react';
import ReadingTime, { ReadingTimeProps } from '.';

import mock from '../../../utils/db.json';
const content = mock.data.posts.data[0].attributes;

export default {
  title: 'Components/Blog/ReadingTime',
  component: ReadingTime,
  args: content,
} as Meta;

export const Default: StoryFn<ReadingTimeProps> = (args) => (
  <ReadingTime {...args} />
);
