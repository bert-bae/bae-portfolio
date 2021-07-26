import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Timeline from "../timeline";

export type CertificationBlockProps = {
  title: string;
  provider: string;
  to: string;
  from: string;
  link?: string;
};

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  },
  listItem: {
    padding: theme.spacing(0.25),
  },
  linkToCert: {
    backgroundColor: theme.palette.secondary.light,
    color: "#FFF",
    borderRadius: "8px",
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    textDecoration: "none",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      transition: "0.1s all ease-in",
    },
  },
}));

const CertificationBlock: React.FC<CertificationBlockProps> = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item lg={12} sm={12} xs={12}>
        <Box component="div" className={classes.blockContainer}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box>
              <Typography component="h3" variant="h5">
                {props.title}
              </Typography>
              <Typography component="p" variant="subtitle2">
                <i>
                  {props.from} - {props.to}
                </i>
              </Typography>
            </Box>
            {props.link && (
              <Typography
                component="a"
                target="_blank"
                className={classes.linkToCert}
                href={props.link}
              >
                Certificate
              </Typography>
            )}
          </Box>
          <ul>
            <li>{props.provider}</li>
          </ul>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CertificationBlock;
