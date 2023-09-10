export interface SettingStrapi {
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
  alternativeText?: string;
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
