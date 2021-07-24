import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./rain-background.scss";

const rainCount = 200;

const useStyles = makeStyles((theme) => ({
  background: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
  },
}));

const getStringifiedPercentage = (numPercent: number) => {
  return String(numPercent * 100) + "%";
};

const createLine = (top: string, left: string, key: any) => {
  return <div className="rain" style={{ top, left }} key={key}></div>;
};

const RainBackground: React.FC<{}> = (props) => {
  const classes = useStyles();

  const rainDrops = [];
  let i = 0;
  while (i < rainCount) {
    i++;
    rainDrops.push(
      createLine("0%", getStringifiedPercentage(Math.random()), i)
    );
  }
  return <Box className={classes.background}>{rainDrops}</Box>;
};

export default RainBackground;
