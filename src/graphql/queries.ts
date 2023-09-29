import { gql } from 'graphql-request';
import { FRAGMENTS } from './fragments';

export const QUERIES_GET_POSTS = gql`
  ${FRAGMENTS}

  query GET_POSTS(
   $sort: [String] = "createdAt:desc",
   $start: Int = 0,
   $limit: Int = 10
  ) {
  setting {
    data {
      id
      attributes {
        ...setting
      }
    }
  }
  posts(sort: $sort pagination: { start: $start, limit: $limit }) {
    data {
      id
      attributes {
        ...post
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`;

export const QUERIES_GET_POSTS_BY_SLUG = gql`
  ${FRAGMENTS}

  query GET_POSTS_BY_SLUG(
  $postSlug: String
  $sort: [String] = "createdAt:desc"
  $start: Int = 0
  $limit: Int = 10
) {
  setting {
    data {
      id
      attributes {
        ...setting
      }
    }
  }
  posts(
    sort: $sort
    pagination: { start: $start, limit: $limit }
    filters: { slug: { eq: $postSlug } }
  ) {
    data {
      id
      attributes {
        ...post
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`;

export const QUERIES_GET_POSTS_BY_AUTHOR = gql`
  ${FRAGMENTS}

  query GET_POSTS_BY_AUTHOR(
  $authorSlug: String
  $sort: [String] = "createdAt:desc"
  $start: Int = 0
  $limit: Int = 10
) {
  setting {
    data {
      id
      attributes {
        ...setting
      }
    }
  }
  posts(
    sort: $sort
    pagination: { start: $start, limit: $limit }
    filters: { author: { slug: { eq: $authorSlug } } }
  ) {
    data {
      id
      attributes {
        ...post
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`;

export const QUERIES_GET_POSTS_BY_CATEGORY = gql`
  ${FRAGMENTS}

  query GET_POSTS_BY_CATEGORY(
  $categorySlug: String
  $sort: [String] = "createdAt:desc"
  $start: Int = 0
  $limit: Int = 10
) {
  setting {
    data {
      id
      attributes {
        ...setting
      }
    }
  }
  posts(
    sort: $sort
    pagination: { start: $start, limit: $limit }
    filters: { categories: { slug: { eq: $categorySlug } } }
  ) {
    data {
      id
      attributes {
        ...post
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`;

export const QUERIES_GET_POSTS_BY_TAG = gql`
  ${FRAGMENTS}

  query GET_POSTS_BY_TAG(
  $tagSlug: String
  $sort: [String] = "createdAt:desc"
  $start: Int = 0
  $limit: Int = 10
) {
  setting {
    data {
      id
      attributes {
        ...setting
      }
    }
  }
  posts(
    sort: $sort
    pagination: { start: $start, limit: $limit }
    filters: { tags: { slug: { eq: $tagSlug } } }
  ) {
    data {
      id
      attributes {
        ...post
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`;

export const QUERIES_GET_POSTS_BY_TITLE = gql`
  ${FRAGMENTS}

  query GET_POSTS_BY_TITLE(
  $postTitle: String
  $sort: [String] = "createdAt:desc"
  $start: Int = 0
  $limit: Int = 10
) {
  setting {
    data {
      id
      attributes {
        ...setting
      }
    }
  }
  posts(
    sort: $sort
    pagination: { start: $start, limit: $limit }
    filters: { title: { containsi: $postTitle } }
  ) {
    data {
      id
      attributes {
        ...post
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`;

export const QUERIES_GET_ABOUT = gql`
  query GET_ABOUT {
  abouts {
    data {
      attributes {
        title
        description
        image {
          data {
            attributes {
              name
              alternativeText
              width
              height
              url
              formats
            }
          }
        }
        hobby
        imageHobby {
          data {
            attributes {
              name
              alternativeText
              width
              height
              url
              formats
            }
          }
        }
      }
    }
  }
}
`;

export const QUERIES_GET_PROJECTS = gql`
query GET_PROJECTS($sort: [String] = "createdAt:desc") {
  projects(sort: $sort) {
    data {
      id
      attributes {
        title
        description
        cover {
          data {
            id
            attributes {
              name
              width
              height
              url
              formats
            }
          }
        }
        isPinned
        project_categories {
          data {
            id
            attributes {
              displayName
              slug
              color
            }
          }
        }
        ProjectLink {
          id
          project_host {
            data {
              id
              attributes {
                displayName
                color
              }
            }
          }
          link
        }
      }
    }
  }
}
`;
