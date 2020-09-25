import { gql } from "@apollo/client";

export const GET_TRENDING_PLACES = gql`
  query {
    places {
      id
      title
      description
      photoPath
    }
  }
`;
