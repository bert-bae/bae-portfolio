import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";

import ContactRow from "./contact-row";

type ContactObject = {
  value: string;
  link?: string;
};

export type ContactBoxProps = {
  phoneNumber: ContactObject;
  email: ContactObject;
  linkedIn: ContactObject;
  github: ContactObject;
  address: ContactObject;
};

const useStyles = makeStyles((theme) => ({
  contactBox: {
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(2),
    borderRadius: "8px",
    height: "100%",
  },
}));

const ContactBox: React.FC<ContactBoxProps> = (props) => {
  const { phoneNumber, email, linkedIn, github, address } = props;
  const classes = useStyles();

  return (
    <Box
      className={classes.contactBox}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <ContactRow {...address} Icon={HomeIcon} />
      <ContactRow {...email} Icon={EmailIcon} />
      <ContactRow {...phoneNumber} Icon={PhoneIcon} />
      <ContactRow {...github} Icon={GitHubIcon} />
      <ContactRow {...linkedIn} Icon={LinkedInIcon} />
    </Box>
  );
};

export default ContactBox;
