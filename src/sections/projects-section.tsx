import React from "react";
import Container from "@material-ui/core/Container";
import SectionHeader from "../components/section-header";
import ProjectBlock, { ProjectBlockProps } from "../components/project-block";
import { SectionDefaults } from "../types";

const ProjectsSection: React.FC<
  {
    projects: ProjectBlockProps[];
  } & SectionDefaults
> = (props) => {
  return (
    <Container id={props.identifier}>
      <SectionHeader title={"Projects"}></SectionHeader>
      {props.projects.map((project) => (
        <ProjectBlock {...project} key={project.title} />
      ))}
    </Container>
  );
};

export default ProjectsSection;
