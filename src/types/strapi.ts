export interface Strapi {
  data: Data5;
}

interface Data5 {
  setting: Setting;
  posts: Posts;
}

export interface Posts {
  data: Post[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export interface Post {
  id: string;
  attributes: Attributes8;
}

interface Attributes8 {
  title: string;
  slug: string;
  excerpt: string;
  cover: Cover;
  coverResource: string;
  coverResourceUrl: string;
  content: string;
  allowComments: boolean;
  tags: Tags;
  categories: Categories;
  author: Author;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Author {
  data: Data4;
}

interface Data4 {
  id: string;
  attributes: Attributes7;
}

interface Attributes7 {
  displayName: string;
  slug: string;
  description: string;
  image: Image;
}

interface Image {
  data: Data3;
}

interface Data3 {
  id: string;
  attributes: Attributes6;
}

interface Attributes6 {
  name: string;
  alternativeText?: string | null;
  url: string;
  width: number;
  height: number;
  formats: Formats;
}

export interface Categories {
  data: Datum3[];
}

interface Datum3 {
  attributes: Attributes5;
}

interface Attributes5 {
  displayName: string;
  slug: string;
  color: string;
}

export interface Tags {
  data: Datum2[];
}

interface Datum2 {
  attributes: Attributes4;
}

interface Attributes4 {
  displayName: string;
  slug: string;
}

export interface Cover {
  data: Datum[];
}

interface Datum {
  attributes: Attributes3;
}

interface Attributes3 {
  name: string;
  alternativeText?: string | null;
  url: string;
  width: number;
  height: number;
  formats: Formats2;
}

interface Formats2 {
  large: Thumbnail;
  small: Thumbnail;
  medium: Thumbnail;
  thumbnail: Thumbnail;
}

export interface Setting {
  data: Data2;
}

interface Data2 {
  id: string;
  attributes: Attributes2;
}

interface Attributes2 {
  blogName: string;
  blogDescription: string;
  logo: Logo;
  menuLink: MenuLink[];
  footer: string;
}

interface MenuLink {
  id: string;
  link: string;
  text: string;
  newTab: boolean;
}

interface Logo {
  data: Data;
}

interface Data {
  id: string;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText?: string | null;
  width: number;
  url: string;
  formats: Formats;
}

interface Formats {
  thumbnail: Thumbnail;
}

interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string | null;
  size: number;
  width: number;
  height: number;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}
