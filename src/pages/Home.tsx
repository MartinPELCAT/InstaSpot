import { Box, Divider } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { NewPlaces } from "../components/places-horizontal-list/new-places";
import { TrendingPlaces } from "../components/places-horizontal-list/trending-places";

const Home: FunctionComponent = () => {
  return (
    <Box>
      {/* Add select search */}
      <Divider />
      <TrendingPlaces />
      <Divider />
      <NewPlaces />
    </Box>
  );
};

export default Home;
