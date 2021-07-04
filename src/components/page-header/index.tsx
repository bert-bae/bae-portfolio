import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

type PageHeaderProps = {
  image: string;
  title: string;
  children?: ReactElement;
};

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: theme.palette.primary.main,
    color: "#FFF",
    padding: theme.spacing(4),
  },
  profileImage: {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    margin: theme.spacing(4),
  },
}));

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const classes = useStyles();
  return (
    <Box
      component="div"
      className={classes.headerContainer}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <img className={classes.profileImage} src={props.image} alt="profile" />
      <Box display="flex" flexDirection="column">
        <Typography variant="h2" component="h2" gutterBottom={!!props.children}>
          {props.title}
        </Typography>
        <Box alignSelf="flex-end">{props.children}</Box>
      </Box>
    </Box>
  );
};

export default PageHeader;
