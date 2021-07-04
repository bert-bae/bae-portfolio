import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import TagList from "../tag-list";

export type ProjectBlockProps = {
  title: string;
  projectUrl: string;
  description: string;
  demoUrl?: string;
  images?: string[];
  techStack?: string[];
};

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  },
  blockHeader: {
    marginBottom: theme.spacing(2),
  },
  linkToDemo: {
    backgroundColor: theme.palette.secondary.light,
    color: "#FFF",
    borderRadius: "8px",
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    textDecoration: "none",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: theme.palette.info.main,
      transition: "0.1s all ease-in",
    },
  },
  linkToProject: {
    backgroundColor: theme.palette.info.light,
    color: "#FFF",
    borderRadius: "8px",
    padding: theme.spacing(1),
    textDecoration: "none",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: theme.palette.info.main,
      transition: "0.1s all ease-in",
    },
  },
  projectTitle: {
    marginRight: theme.spacing(2),
  },
  techStackTags: {
    width: "75%",
    minWidth: "300px",
    margin: "0 0 0 auto",
  },
}));

const ProjectBlock: React.FC<ProjectBlockProps> = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.blockContainer}>
      <Box
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        className={classes.blockHeader}
      >
        <Typography
          component="h3"
          variant="h5"
          className={classes.projectTitle}
        >
          {props.title}
        </Typography>
        <Box>
          {props.demoUrl && (
            <Typography
              component="a"
              target="_blank"
              className={classes.linkToDemo}
              href={props.demoUrl}
            >
              Demo
            </Typography>
          )}
          <Typography
            component="a"
            target="_blank"
            className={classes.linkToProject}
            href={props.projectUrl}
          >
            Github Repo
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" component="p">
        {props.description}
      </Typography>
      {props.techStack && (
        <Box component="div" className={classes.techStackTags}>
          <TagList
            tags={props.techStack.map((tech) => ({ label: tech }))}
            justifyContent="flex-end"
          />
        </Box>
      )}
    </Box>
  );
};

export default ProjectBlock;
