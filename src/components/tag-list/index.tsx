import React, { ReactElement } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

export type TagProps = {
  label: string;
  onSelect?: () => void;
  onDelete?: () => void;
  className?: string;
  icon?: ReactElement;
};

export type TagListProps = {
  tags: TagProps[];
  justifyContent?: "flex-start" | "flex-end" | "center";
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    background: "none",
    boxShadow: "none",
  },
  chip: {
    margin: theme.spacing(0.5),
    // backgroundColor: theme.palette.info.main,
    boxShadow: theme.shadows[5],
    // color: "#FFF",
  },
}));

const TagList: React.FC<TagListProps> = (props) => {
  const classes = useStyles();
  return (
    <Paper
      component="ul"
      className={classes.root}
      style={{
        justifyContent: props.justifyContent || " center",
      }}
    >
      {props.tags.map((data, i) => {
        return (
          <Chip
            icon={data.icon}
            label={data.label}
            onClick={data.onSelect}
            onDelete={data.onDelete}
            className={clsx(classes.chip, data.className)}
          />
        );
      })}
    </Paper>
  );
};

export default TagList;
