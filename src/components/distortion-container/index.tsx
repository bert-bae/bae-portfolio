import Box from "@material-ui/core/Box";
import clsx from "clsx";
import React from "react";
import { getRandomizedDelay } from "../../utils/animation";
import "./distortion.scss";

type DistortContainerProps = {
  delayFrom?: number;
  delayTo?: number;
  onHover?: boolean;
  children: React.ReactNode;
};

export type ExtendedContainerProps = Omit<
  React.ComponentProps<typeof Box>,
  keyof DistortContainerProps
> &
  DistortContainerProps;

const DistortionContainer: React.FC<ExtendedContainerProps> = (props) => {
  const { className, style, ...rest } = props;
  const styles =
    props.delayFrom && props.delayTo
      ? getRandomizedDelay(props.delayFrom, props.delayTo)
      : { ...(style || {}) };
  return (
    <Box
      className={clsx(
        props.className,
        "distort",
        props.onHover ? "distort-on-hover" : "distort-always"
      )}
      style={styles}
      {...rest}
    >
      {props.children}
    </Box>
  );
};

export default DistortionContainer;
