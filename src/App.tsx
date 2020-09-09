import React, { FunctionComponent, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import { Container, Box } from "@material-ui/core";
const Home = lazy(() => import("./pages/Home"));

export const App: FunctionComponent = () => {
  return (
    <>
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
    </>
  );
};
