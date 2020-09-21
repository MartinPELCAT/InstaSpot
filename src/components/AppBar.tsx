import React, { FunctionComponent } from "react";
import {
  AppBar as ApplicationBar,
  Toolbar,
  Typography,
  makeStyles,
  Container,
  Box,
} from "@material-ui/core";
import { SearchZone } from "./SearchZone";

const useStyle = makeStyles({
  appbar: {
    color: "white",
    background: "linear-gradient(to left, #141e30, #1C2D43)",
  },
  toolbar: {
    padding: 0,
  },
  title: {
    color: "black",
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  },
});
const AppBar: FunctionComponent = () => {
  const styles = useStyle();
  return (
    <ApplicationBar position="static" className={styles.appbar} elevation={1}>
      <Container>
        <Toolbar className={styles.toolbar}>
          <Box flexGrow={1}>
            <Box display="flex">
              <Typography variant="h4" className={styles.title}>
                Insta Spot
              </Typography>
            </Box>
          </Box>
          <SearchZone />
        </Toolbar>
      </Container>
    </ApplicationBar>
  );
};

export default AppBar;
