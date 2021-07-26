import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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
    <Box component="div" className={classes.sectionHeader}>
      <Typography component="h3" variant="h4">
        {props.title}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
