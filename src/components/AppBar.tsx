import React, { FunctionComponent } from "react";
import {
  AppBar as ApplicationBar,
  Toolbar,
  Typography,
  makeStyles,
  Container,
  InputBase,
  Box,
  Theme,
  createStyles,
  Paper,
  IconButton,
} from "@material-ui/core";

import { Search } from "@material-ui/icons";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      backgroundColor: "whitesmoke",
      color: "black",
      fontWeight: 600,
    },
    toolbar: {
      padding: 0,
    },
    input: {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    inputWrapper: {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: 400,
      display: "flex",
    },
    searchIcon: {
      float: "right",
    },
  })
);

const AppBar: FunctionComponent = () => {
  const styles = useStyle();
  return (
    <ApplicationBar position="static" className={styles.appbar} elevation={1}>
      <Container>
        <Toolbar className={styles.toolbar}>
          <Box flexGrow={1}>
            <Typography variant="h6">Insta Spot</Typography>
          </Box>
          <Paper elevation={0} className={styles.inputWrapper}>
            <InputBase placeholder={"Search"} className={styles.input} />
            <IconButton type="submit" className={styles.searchIcon}>
              <Search />
            </IconButton>
          </Paper>
        </Toolbar>
      </Container>
    </ApplicationBar>
  );
};

export default AppBar;
