export interface StrapiProjects {
  data: Data2;
}

interface Data2 {
  projects: Projects;
}

export interface Projects {
  data: Project[];
}

export interface Project {
  id: string;
  attributes: Attributes4;
}

interface Attributes4 {
  title: string;
  description: string;
  cover: Cover;
  isPinned: boolean;
  ProjectLink: ProjectLink[];
  createdAt: string;
}

export interface ProjectLink {
  id: string;
  project_host: Projecthost;
  link: string;
}

export interface Projecthost {
  data: Data;
}

interface Data {
  id: string;
  attributes: Attributes3;
}

interface Attributes3 {
  displayName: string;
  color: string;
}

export interface Cover {
  data: Datum[];
}

interface Datum {
  id: string;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  width: number;
  height: number;
  url: string;
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
