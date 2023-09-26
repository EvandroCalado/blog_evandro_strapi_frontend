import { Meta, StoryFn } from '@storybook/react';
import Categories, { CategoriesProps } from '.';

import mock from '../../../utils/db.json';
const categories = mock.data.posts.data[0].attributes.categories;

export default {
  title: 'Components/Blog/Categories',
  component: Categories,
  args: {
    categories,
  },
} as Meta;

export const Default: StoryFn<CategoriesProps> = (args) => (
  <Categories {...args} />
);
