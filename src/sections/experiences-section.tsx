import React from "react";
import Container from "@material-ui/core/Container";
import SectionHeader from "../components/section-header";
import ResumeBlock, { ResumeBlockProps } from "../components/resume-block";
import { SectionDefaults } from "../types";

const ExperiencesSection: React.FC<
  {
    workExperiences: ResumeBlockProps[];
  } & SectionDefaults
> = (props) => {
  return (
    <Container id={props.identifier}>
      <SectionHeader title={"Experiences"}></SectionHeader>
      {props.workExperiences.map((exp) => (
        <ResumeBlock {...exp} key={exp.title} />
      ))}
    </Container>
  );
};

export default ExperiencesSection;
