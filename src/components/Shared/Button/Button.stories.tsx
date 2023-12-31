import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Shared/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Disabled: StoryFn<ButtonProps> = (args) => (
  <Button {...args} disabled />
);

export const WithWidthFixed: StoryFn<ButtonProps> = (args) => (
  <Button {...args} width="300px" />
);
