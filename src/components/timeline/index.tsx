import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AdjustIcon from "@material-ui/icons/Adjust";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export type TimelineProps = {
  from: string;
  to: string;
};

const useStyles = makeStyles((theme) => ({
  timeline: {
    textAlign: "center",
    height: "100%",
    color: theme.palette.info.light,
  },
  fromIcon: {
    color: theme.palette.info.light,
  },
  toIcon: {
    color: theme.palette.info.light,
  },
  line: {
    width: "2px",
    height: "25%",
    border: `2px solid ${theme.palette.info.light}`,
  },
}));

const Timeline: React.FC<TimelineProps> = (props) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.timeline}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography component="p" variant="caption">
          {props.to}
        </Typography>
        <AdjustIcon className={classes.toIcon} />
      </Box>
      <Box className={classes.line} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <FiberManualRecordIcon fontSize="small" className={classes.fromIcon} />
        <Typography component="p" variant="caption">
          {props.from}
        </Typography>
      </Box>
    </Box>
  );
};

export default Timeline;
