import { IconButton, makeStyles } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React, { ReactNode, useRef } from "react";
import { findDOMNode } from "react-dom";

const useStyles = makeStyles({
  root: {
    position: "relative",
    marginLeft: "-9px",
  },
  container: {
    display: "flex",
    overflow: "hidden",
  },
  leftArrow: {
    position: "absolute",
    left: 9,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
  },
  rightArrow: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
  },
});

type Props = {
  children?: ReactNode;
};

export default function HomeListLayout({ children }: Props) {
  const classes = useStyles();
  const ref = useRef(null);

  const handleLeftClick = () => {
    const domNode = findDOMNode(ref.current) as Element;
    domNode.scrollTo({
      left: domNode.scrollLeft - domNode.parentElement?.offsetWidth!,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    const domNode = findDOMNode(ref.current) as Element;
    domNode.scrollTo({
      left: domNode.parentElement?.offsetWidth! + domNode.scrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftArrow}>
        <IconButton onClick={handleLeftClick}>
          <ArrowBackIos />
        </IconButton>
      </div>
      <div ref={ref} className={classes.container}>
        {children}
      </div>
      <div className={classes.rightArrow}>
        <IconButton onClick={handleRightClick}>
          <ArrowForwardIos />
        </IconButton>
      </div>
    </div>
  );
}
