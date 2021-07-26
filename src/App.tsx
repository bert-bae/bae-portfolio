import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./App.css";

import { theme } from "./theme";
import PageHeader from "./components/page-header";
import { workExperiences, projectData, contactInfo, aboutMe } from "./data";
import ContactSection from "./sections/contact-section";
import ExperiencesSection from "./sections/experiences-section";
import ProjectsSection from "./sections/projects-section";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    maxWidth: "1280px",
    margin: "0 auto",
  },
});

const identifiers = {
  contacts: "contacts",
  experiences: "experiences",
  projects: "projects",
};
const pageNav = [
  {
    label: "Contact",
    target: `#${identifiers.contacts}`,
  },
  {
    label: "Experiences",
    target: `#${identifiers.experiences}`,
  },
  {
    label: "Projects",
    target: `#${identifiers.projects}`,
  },
];

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageHeader name="Elbert Bae" pageNav={pageNav} />
      <Box className={classes.root} component="div">
        <ContactSection
          identifier={identifiers.contacts}
          contactData={contactInfo}
          aboutMe={aboutMe}
        />
        <ExperiencesSection
          identifier={identifiers.experiences}
          workExperiences={workExperiences}
        />
        <ProjectsSection
          identifier={identifiers.projects}
          projects={projectData}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
