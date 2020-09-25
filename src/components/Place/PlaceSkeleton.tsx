import { makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

const useStyles = makeStyles({
  card: {
    minWidth: "calc(25% - 9px)",
    marginLeft: "9px",
  },
});

export default function PlaceSkeleton() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Skeleton variant="rect" animation={"wave"} height={220} />
    </div>
  );
}
