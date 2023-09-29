import { Meta, StoryFn } from '@storybook/react';
import Cover, { CoverProps } from './Cover';

import mock from '../../../utils/projects.json';
const cover = mock.data.projects.data[0].attributes.cover;

export default {
  title: 'Components/Projects/Cover',
  component: Cover,
  args: {
    cover,
  },
} as Meta;

export const Default: StoryFn<CoverProps> = (args) => <Cover {...args} />;
