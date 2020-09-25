import { Box, Divider } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { GET_TRENDING_PLACES } from "../../graphql/queries";
import HomeListContainer from "../../components/ui/HomeList/HomeListContainer";
import HomeList from "../../components/ui/HomeList/HomeList";

const Home: FunctionComponent = () => {
  return (
    <Box marginTop={-3}>
      {/* Add select search */}
      <HomeListContainer title="Trending Places">
        <HomeList query={GET_TRENDING_PLACES} />
      </HomeListContainer>
      <Divider />
      <HomeListContainer title="New Places">
        <HomeList query={GET_TRENDING_PLACES} />
      </HomeListContainer>
      <Divider />
      <HomeListContainer title="For me">
        <HomeList query={GET_TRENDING_PLACES} />
      </HomeListContainer>
    </Box>
  );
};

export default Home;
