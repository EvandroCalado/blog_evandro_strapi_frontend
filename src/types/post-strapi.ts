export interface PostStrapi {
  id: string;
  attributes: Attributes6;
}

interface Attributes6 {
  title: string;
  slug: string;
  excerpt: string;
  cover: Cover;
  content: string;
  allowComments: boolean;
  tags: Tags;
  categories: Categories;
  author: Author;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Author {
  data: Data2;
}

interface Data2 {
  id: string;
  attributes: Attributes5;
}

interface Attributes5 {
  displayName: string;
  slug: string;
  image: Image;
}

interface Image {
  data: Data;
}

interface Data {
  id: string;
  attributes: Attributes4;
}

interface Attributes4 {
  name: string;
  alternativeText?: string;
  url: string;
  width: number;
  height: number;
  formats: Formats2;
}

interface Formats2 {
  thumbnail: Large;
}

interface Categories {
  data: Datum3[];
}

interface Datum3 {
  attributes: Attributes3;
}

interface Attributes3 {
  displayName: string;
  slug: string;
  color: string;
}

interface Tags {
  data: Datum2[];
}

interface Datum2 {
  attributes: Attributes2;
}

interface Attributes2 {
  displayName: string;
  slug: string;
}

interface Cover {
  data: Datum[];
}

interface Datum {
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText?: string;
  url: string;
  width: number;
  height: number;
  formats: Formats;
}

interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}
