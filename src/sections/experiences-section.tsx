import React from "react";
import Container from "@material-ui/core/Container";
import SectionHeader from "../components/section-header";
import ResumeBlock, { ResumeBlockProps } from "../components/resume-block";
import { Fade } from "react-reveal";
import DistortionContainer from "../components/distortion-container";
import { SectionDefaults } from "../types";

const ExperiencesSection: React.FC<
  {
    workExperiences: ResumeBlockProps[];
  } & SectionDefaults
> = (props) => {
  return (
    <Container id={props.identifier}>
      <Fade bottom delay={50} duration={500}>
        <SectionHeader title={"Experiences"}></SectionHeader>
        {props.workExperiences.map((exp) => (
          <DistortionContainer onHover>
            <ResumeBlock {...exp} key={exp.title} />
          </DistortionContainer>
        ))}
      </Fade>
    </Container>
  );
};

export default ExperiencesSection;
