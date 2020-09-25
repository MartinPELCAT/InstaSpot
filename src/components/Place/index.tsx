import { IconButton, makeStyles } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { downloadImage } from "../../utils.ts/downloadImage";
import { IPlace } from "../types/Place";

const useStyles = makeStyles({
  card: {
    minWidth: "calc(25% - 9px)",
    minHeight: "220px",
    marginLeft: "9px",
    position: "relative",
  },
  content: {
    width: "100%",
    height: "100%",
  },
  likeButton: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    width: "100%",
    backdropFilter: "blur(1px)",
  },
});

type Props = {
  place: IPlace;
};

export default function Place({ place }: Props) {
  const classes = useStyles();
  const [image, setImage] = useState(null);

  useEffect(() => {
    downloadImage(place.photoPath!)
      .then((url) => {
        setImage(url);
      })
      .catch(console.error);
  }, [place.photoPath]);
  return (
    <div className={classes.card}>
      {image ? (
        <div
          className={classes.content}
          style={{
            background: `no-repeat url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        <Skeleton variant="rect" animation={"wave"} height={220} />
      )}
      <div className={classes.likeButton}>
        <IconButton style={{ float: "right" }}>
          <FavoriteBorder htmlColor={"red"} fontSize={"large"} />
        </IconButton>
      </div>
    </div>
  );
}
