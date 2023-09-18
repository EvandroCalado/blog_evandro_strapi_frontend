import { Meta, StoryFn } from '@storybook/react';
import LinkButton, { LinkButtonProps } from '.';

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  args: {
    children: 'link button',
    href: '#',
  },
} as Meta;

export const Default: StoryFn<LinkButtonProps> = (args) => (
  <LinkButton {...args} />
);
