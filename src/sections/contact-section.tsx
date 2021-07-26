import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ContactBox, { ContactBoxProps } from "../components/contact-box";
import Typography from "@material-ui/core/Typography";
import SectionHeader from "../components/section-header";
import { Fade } from "react-reveal";
import DistortionContainer from "../components/distortion-container";
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
      <DistortionContainer onHover>
        <Grid
          className={classes.gridContainer}
          container
          direction="row"
          spacing={2}
        >
          <Grid item lg={3} sm={4} xs={12}>
            <Fade left delay={50} duration={500}>
              <ContactBox {...props.contactData} />
            </Fade>
          </Grid>
          <Grid item lg={9} sm={8} xs={12}>
            <Fade right delay={100} duration={500}>
              <SectionHeader title={"About Me"} />
              <Typography component="p" variant="body2">
                {props.aboutMe}
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </DistortionContainer>
    </Container>
  );
};

export default ContactSection;
