import { Projectcategories } from '../../../types/strapi-projects';
import * as Styled from './Categories.styles';

export interface CategoriesProps {
  categories: Projectcategories;
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <Styled.Container>
      {categories.data.map((category) => (
        <Styled.Span
          key={category.id}
          style={{ color: category.attributes.color }}
        >
          {category.attributes.displayName}
        </Styled.Span>
      ))}
    </Styled.Container>
  );
}
