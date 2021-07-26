import React from "react";
import Container from "@material-ui/core/Container";
import SectionHeader from "../components/section-header";
import DistortionContainer from "../components/distortion-container";
import ProjectBlock, { ProjectBlockProps } from "../components/project-block";
import { Fade } from "react-reveal";
import { SectionDefaults } from "../types";

const ProjectsSection: React.FC<
  {
    projects: ProjectBlockProps[];
  } & SectionDefaults
> = (props) => {
  return (
    <Container id={props.identifier}>
      <Fade bottom delay={50} duration={500}>
        <SectionHeader title={"Projects"}></SectionHeader>
        {props.projects.map((project) => (
          <DistortionContainer onHover>
            <ProjectBlock {...project} key={project.title} />
          </DistortionContainer>
        ))}
      </Fade>
    </Container>
  );
};

export default ProjectsSection;
