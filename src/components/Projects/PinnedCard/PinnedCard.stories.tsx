import { Meta, StoryFn } from '@storybook/react';
import PinnedCard, { PinnedCardProps } from './PinnedCard';

import mock from '../../../utils/projects.json';
const project = mock.data.projects.data[0];

export default {
  title: 'Components/Projects/PinnedCard',
  component: PinnedCard,
  args: {
    project,
  },
} as Meta;

export const Default: StoryFn<PinnedCardProps> = (args) => (
  <PinnedCard {...args} />
);
