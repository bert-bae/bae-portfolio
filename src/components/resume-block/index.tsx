import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TagList from "../tag-list";
import Timeline from "../timeline";

export type ResumeBlockProps = {
  title: string;
  company: string;
  to: string;
  from: string;
  address: string;
  points: string[];
  techStack?: string[];
  website?: string;
};

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  },
  listItem: {
    padding: theme.spacing(0.25),
  },
  techStackTags: {
    width: "75%",
    minWidth: "300px",
    margin: "0 0 0 auto",
  },
}));

const ResumeBlock: React.FC<ResumeBlockProps> = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item lg={1} sm={1} xs={1}>
        <Timeline to={props.to} from={props.from} />
      </Grid>
      <Grid item lg={11} sm={11} xs={11}>
        <Box component="div" className={classes.blockContainer}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Typography variant="h5" component="h3">
              {props.title}, {props.company}
            </Typography>
          </Box>
          <Typography variant="subtitle1" component="p">
            <i>{props.address}</i>
          </Typography>
          <Box component="div">
            <ul>
              {props.points.map((pt) => {
                return <li className={classes.listItem}>{pt}</li>;
              })}
            </ul>
          </Box>
          {props.techStack && (
            <Box component="div" className={classes.techStackTags}>
              <TagList
                tags={props.techStack.map((tech) => ({ label: tech }))}
                justifyContent="flex-end"
              />
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ResumeBlock;
