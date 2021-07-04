import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import "./App.css";

import { theme } from "./theme";
import PageHeader from "./components/page-header";
import TagList, { TagProps } from "./components/tag-list";
import ResumeBlock, { ResumeBlockProps } from "./components/resume-block";
import ProjectBlock from "./components/project-block";
import SectionHeader from "./components/section-header";

import { workExperiences, projectData } from "./data";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    maxWidth: "1280px",
    margin: "0 auto",
  },
});

const tags: TagProps[] = [
  {
    label: "React",
  },
  {
    label: "NodeJS",
  },
  {
    label: "Typescript",
  },
  {
    label: "AWS",
  },
];

const resumeProps: ResumeBlockProps = {
  title: "Software Engineer",
  company: "Rival Technologies",
  address: "1199 W Hastings St #300, Vancouver, BC",
  from: "October 2019",
  to: "Current",
  points: [
    "Developing and maintaining backend services for event-driven microservice systems.",
    "Working with serverless architecture with AWS using Lambdas, DynamoDB, and SQS to create fast, responsive, and highly scalable responding systems.",
    "Working in teams to design, create, and deploy services across frontend and backend teams for continuous feature deliveries.",
    "Supporting DevOps investigate production bugs, data corruption, and performance issues to fix issues impacting end users.",
    "Supporting frontend development when required to help meet deadlines for feature development.",
    "Setting up CI/CD pipeline configurations in CircleCI and Bitbucket.",
  ],
  techStack: ["React", "NodeJS", "Typescript", "GraphQL", "AWS", "Serverless"],
};

const projectProps = {
  title: "Flooding",
  description:
    "Climate change is a real threat and as a developer, I wanted to create something that can share the impacts of rising water levels on our coastal cities. Using MapboxGL, custom layers, and React, this quick client-side project provides users a visual layout of the effects of rising water levels. Explore the map and see what areas are at risk of flooding based on 10 meter incremental rises in our ocean water levels.",
  techStack: ["React", "TypeScript", "MapboxGL"],
  projectUrl: "https://github.com/bert-bae/flooding",
};

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root} component="div">
        <CssBaseline />
        <PageHeader
          image={
            "https://cdn-images-1.medium.com/max/1200/1*YRINRZFr0E1FRJ4JpizEMw.jpeg"
          }
          title="Elbert Bae | Developer"
        >
          <TagList tags={tags} />
        </PageHeader>
        <Container>
          <SectionHeader title={"Experiences"} />
          {workExperiences.map((exp) => (
            <ResumeBlock {...exp} />
          ))}
        </Container>

        <Container>
          <SectionHeader title={"Projects"} />
          {projectData.map((project) => (
            <ProjectBlock {...project} />
          ))}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
