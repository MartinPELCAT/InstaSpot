import { Box, Typography, BoxProps } from "@material-ui/core";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function HomeListContainer(props: Props & BoxProps) {
  const { title, children, ...rest } = props;
  return (
    <Box marginY={3} {...rest}>
      <Typography variant="h5">{title}</Typography>
      <Box marginY={2}>{children}</Box>
    </Box>
  );
}
