import { Meta } from '@storybook/react';
import PostNotFound from '.';

export default {
  title: 'Components/PostNotFound',
  component: PostNotFound,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <PostNotFound />;
