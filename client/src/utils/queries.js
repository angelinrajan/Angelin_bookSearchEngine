import { gql } from '@apollo/client';

// Define your GraphQL queries

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
      }
    }
  }
`;

// export const SEARCH_BOOKS = gql`
//   query searchBooks($searchTerm: String!) {
//     searchBooks(searchTerm: $searchTerm) {
//       _id
//       authors
//       description
//       bookId
//       image
//       link
//       title
//     }
//   }
// `;

