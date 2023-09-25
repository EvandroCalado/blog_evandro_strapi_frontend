import { Meta } from '@storybook/react';
import ComingSoon from '.';

export default {
  title: 'Shared/ComingSoon',
  component: ComingSoon,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <ComingSoon />;
