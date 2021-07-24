import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ContactBox, { ContactBoxProps } from "../components/contact-box";
import Typography from "@material-ui/core/Typography";
import SectionHeader from "../components/section-header";
import { SectionDefaults } from "../types";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: `${theme.spacing(2)}px 0`,
  },
}));

const ContactSection: React.FC<
  {
    contactData: ContactBoxProps;
    aboutMe: string;
  } & SectionDefaults
> = (props) => {
  const classes = useStyles();
  return (
    <Container id={props.identifier}>
      <Grid
        className={classes.gridContainer}
        container
        direction="row"
        spacing={2}
      >
        <Grid item lg={5} sm={5} xs={12}>
          <ContactBox {...props.contactData} />
        </Grid>
        <Grid item lg={7} sm={7} xs={12}>
          <SectionHeader title={"About Me"} />
          <Typography component="p" variant="body2">
            {props.aboutMe}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactSection;
