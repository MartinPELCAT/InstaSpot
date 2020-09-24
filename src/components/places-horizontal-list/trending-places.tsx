import { Box, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query {
    places {
      id
      title
      description
    }
  }
`;

export const TrendingPlaces: FunctionComponent = () => {
  const { data, loading, error } = useQuery(QUERY);
  if (loading) return <>Loading</>;
  if (error) return <>Error</>;
  return (
    <Box marginY={2}>
      <Typography variant="h5">Trending Places</Typography>
      {/* Add item from data */}
      <div>{JSON.stringify(data)}</div>
    </Box>
  );
};
