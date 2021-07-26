import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DistortionContainer from "../distortion-container";

export type SectionHeaderProps = {
  title: string;
};

const useStyles = makeStyles((theme) => ({
  sectionHeader: {
    borderBottom: `1px solid`,
    margin: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
  },
}));

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const classes = useStyles();
  return (
    <DistortionContainer
      component="div"
      className={classes.sectionHeader}
      onHover
    >
      <Typography component="h3" variant="h4">
        {props.title}
      </Typography>
    </DistortionContainer>
  );
};

export default SectionHeader;
