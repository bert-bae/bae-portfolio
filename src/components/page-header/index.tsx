import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RainBackground from "../rain-background";

type PageHeaderProps = {
  name: string;
  pageNav: { label: string; target: string }[];
};

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: theme.palette.primary.main,
    color: "#FFF",
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    height: "100vh",
  },
  introContainer: {
    height: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    textAlign: "center",
  },
  highlight: {
    color: theme.palette.info.light,
  },
  pageNavButton: {
    color: "#FFF",
    border: "1px solid #FFF",
    margin: theme.spacing(0.5),
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.headerContainer}>
      <RainBackground />
      <Box
        className={classes.introContainer}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="h4" component="h2">
          Hello, I am <span className={classes.highlight}>{props.name}</span>.
        </Typography>
        <Typography variant="h4" component="h2">
          I am a full-stack developer.
        </Typography>
        <Box marginTop="8px">
          {props.pageNav.map((nav) => {
            return (
              <Button
                className={classes.pageNavButton}
                href={nav.target}
                component="a"
                disableElevation
              >
                {nav.label}
              </Button>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default PageHeader;
