import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { binaryTexts } from "./binary-texts";
import "./matrix-background.scss";

export type MatrixBackgroundProps = {
  count: number;
};

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

const getStringifiedPercentage = (numPercent: number): string => {
  return String(numPercent * 100) + "%";
};

const getRandomNumberBetween = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

const createLine = (text: string, key: any) => {
  return (
    <div
      className="matrix-line"
      style={{
        top: "-100vh",
        left: getStringifiedPercentage(Math.random()),
        animationDelay: `${getRandomNumberBetween(0.5, 2).toFixed(1)}s`,
        animationDuration: `${getRandomNumberBetween(2, 5).toFixed(1)}s`,
      }}
      key={key}
    >
      <div className="matrix-binary">{text}</div>
    </div>
  );
};

const binaryTextEntries = Object.values(binaryTexts);
const MatrixBackground: React.FC<MatrixBackgroundProps> = (props) => {
  const classes = useStyles();

  const matrixLine = [];
  let i = 0;
  while (i < props.count) {
    i++;
    const position: number = Number(
      getRandomNumberBetween(0, binaryTextEntries.length - 1).toFixed(0)
    );
    const text = binaryTextEntries[position];
    matrixLine.push(createLine(text, i));
  }
  return <Box className={classes.background}>{matrixLine}</Box>;
};

export default MatrixBackground;
