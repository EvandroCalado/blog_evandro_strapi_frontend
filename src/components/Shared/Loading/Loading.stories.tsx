import { Meta } from '@storybook/react';
import Loading from './Loading';

export default {
  title: 'Components/Shared/Loading',
  component: Loading,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Loading />;
