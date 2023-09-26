import { Meta, StoryFn } from '@storybook/react';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Components/Shared/Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
} as Meta;

export const Default: StoryFn<HeadingProps> = (args) => <Heading {...args} />;
