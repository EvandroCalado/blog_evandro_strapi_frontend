import { Meta } from '@storybook/react';
import Error404 from './Error404';

export default {
  title: 'Components/Shared/Error404',
  component: Error404,
} as Meta;

export const Default = () => (
  <div>
    <Error404 />
  </div>
);
