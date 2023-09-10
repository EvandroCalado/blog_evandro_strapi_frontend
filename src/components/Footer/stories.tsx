import { Meta, StoryFn } from '@storybook/react';
import Footer, { FooterProps } from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
  args: {
    footer: 'Evandro Calado',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<FooterProps> = (args) => <Footer {...args} />;
