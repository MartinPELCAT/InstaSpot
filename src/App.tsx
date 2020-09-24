import React, { FunctionComponent, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./components/app-bar";
import { Container, Box } from "@material-ui/core";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const Home = lazy(() => import("./pages/Home"));

const client = new ApolloClient({
  uri: "http://localhost:5001/instagram-spot/us-central1/gql",
  cache: new InMemoryCache(),
});

export const App: FunctionComponent = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <AppBar />
        <Container>
          <Box paddingX={2} paddingTop={2}>
            <Router>
              <Suspense fallback={<>Loading</>}>
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
              </Suspense>
            </Router>
          </Box>
        </Container>
      </ApolloProvider>
    </>
  );
};
