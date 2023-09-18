import { gql } from 'graphql-request';

export const FRAGMENTS = gql`
  fragment image on UploadFile {
  name
  alternativeText
  url
  width
  height
  formats
}

fragment post on Post {
  title
  slug
  excerpt
  cover {
    data {
      attributes {
        ...image
      }
    }
  }
  coverResource
  coverResourceUrl
  content
  allowComments
  tags {
    data {
      attributes {
        displayName
        slug
      }
    }
  }
  categories {
    data {
      attributes {
        displayName
        slug
        color
      }
    }
  }
  author {
    data {
      id
      attributes {
        displayName
        slug
        description
        image {
          data {
            id
            attributes {
              name
              alternativeText
              url
              width
              height
              formats
            }
          }
        }
      }
    }
  }
  createdAt
  updatedAt
  publishedAt
}

fragment setting on Setting {
  blogName
  blogDescription
  logo {
    data {
      id
      attributes {
        name
        alternativeText
        width
        width
        url
        formats
      }
    }
  }
  menuLink {
    id
    link
    text
    newTab
  }
  footer
}
`;
