import React, { FunctionComponent, FormEvent } from "react";
import {
  Paper,
  InputBase,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
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
    menu: {
      width: 400,
    },
  })
);
const options = ["Option 1", "Option 2"];

export const SearchZone: FunctionComponent = () => {
  const styles = useStyle();

  const handleSubmit = (e: FormEvent) => {
    // e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <Paper
        elevation={0}
        className={styles.inputWrapper}
        component="form"
        onSubmit={handleSubmit}
      >
        <Autocomplete
          className={styles.input}
          disableListWrap
          options={options}
          groupBy={(option) => option[0].toUpperCase()}
          renderInput={(params) => (
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              style={{ width: "100%" }}
              name="option"
              autoFocus
            />
          )}
          renderOption={(option) => <Typography noWrap>{option}</Typography>}
        />

        <IconButton type="submit" className={styles.searchIcon}>
          <Search />
        </IconButton>
      </Paper>
    </>
  );
};
