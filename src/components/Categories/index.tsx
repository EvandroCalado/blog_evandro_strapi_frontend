import Link from 'next/link';
import { Categories as StrapiCategories } from '../../types/strapi';
import * as Styled from './styles';

export interface CategoriesProps {
  categories: StrapiCategories;
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <Styled.Container>
      {categories.data.map((category) => (
        <Link
          href={`/category/${category.attributes.slug}`}
          key={category.attributes.slug}
          style={{ color: category.attributes.color }}
        >
          {category.attributes.displayName}
        </Link>
      ))}
    </Styled.Container>
  );
}
