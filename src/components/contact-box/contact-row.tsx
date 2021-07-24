import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export type ContactRowProps = {
  Icon: any;
  value: string;
  link?: string;
};

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    color: "#FFF",
    textAlign: "end",
  },
  icon: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
  },
  contactInfo: {
    color: "#FFF",
  },
}));

const ContactRow: React.FC<ContactRowProps> = (props) => {
  const { Icon, value, link } = props;
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      className={classes.rowContainer}
    >
      <Icon fontSize="large" className={classes.icon} />
      <Typography
        className={classes.contactInfo}
        variant="body1"
        component={link ? "a" : "p"}
        href={link || ""}
        target="_blank"
      >
        {value}
      </Typography>
    </Box>
  );
};

export default ContactRow;
