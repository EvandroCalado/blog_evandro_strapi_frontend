import { Meta } from '@storybook/react';
import PostNotFound from './PostNotFound';

export default {
  title: 'Components/Blog/PostNotFound',
  component: PostNotFound,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <PostNotFound />;
