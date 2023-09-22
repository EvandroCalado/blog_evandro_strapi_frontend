export interface StrapiAbout {
  data: Data2;
}

interface Data2 {
  abouts: Abouts;
}

export interface Abouts {
  data: About[];
}

export interface About {
  attributes: Attributes3;
}

interface Attributes3 {
  title: string;
  description: string;
  image: Image;
  hobby: string;
  imageHobby: ImageHobby;
}

export interface ImageHobby {
  data: Datum[];
}

interface Datum {
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  alternativeText?: string | null;
  width: number;
  height: number;
  url: string;
  formats: Formats2;
}

interface Formats2 {
  large: Thumbnail;
  small: Thumbnail;
  medium: Thumbnail;
  thumbnail: Thumbnail;
}

interface Image {
  data: Data;
}

interface Data {
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText?: string | null;
  width: number;
  height: number;
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
