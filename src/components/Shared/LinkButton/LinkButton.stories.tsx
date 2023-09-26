import { Meta, StoryFn } from '@storybook/react';
import LinkButton, { LinkButtonProps } from './LinkButton';

export default {
  title: 'Components/Shared/LinkButton',
  component: LinkButton,
  args: {
    children: 'link button',
    href: '#',
  },
} as Meta;

export const Default: StoryFn<LinkButtonProps> = (args) => (
  <LinkButton {...args} />
);
