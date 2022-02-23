import { gql } from "graphql-request";

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      title
      gallery {
        url
        height
        width
      }
      heading
      slug
      body {
        html
      }
    }
  }
`;
export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String) {
    page(where: { slug: $slug }) {
      id
      title
      gallery {
        url
        height
        width
      }
      heading
      slug
      body {
        html
      }
    }
  }
`;
