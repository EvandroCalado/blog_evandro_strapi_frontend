import { Meta } from '@storybook/react';
import ComingSoon from './ComingSoon';

export default {
  title: 'Components/Shared/ComingSoon',
  component: ComingSoon,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <ComingSoon />;
