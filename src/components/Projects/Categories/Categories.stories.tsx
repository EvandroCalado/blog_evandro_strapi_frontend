import { Meta, StoryFn } from '@storybook/react';
import Categories, { CategoriesProps } from './Categories';

import mock from '../../../utils/projects.json';
const categories = mock.data.projects.data[0].attributes.project_categories;

export default {
  title: 'Components/Projects/Categories',
  component: Categories,
  args: {
    categories,
  },
} as Meta;

export const Default: StoryFn<CategoriesProps> = (args) => (
  <Categories {...args} />
);
