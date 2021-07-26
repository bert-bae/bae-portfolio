import React from "react";
import Container from "@material-ui/core/Container";
import SectionHeader from "../components/section-header";
import CertificationBlock, {
  CertificationBlockProps,
} from "../components/certification-block";
import { Fade } from "react-reveal";
import { SectionDefaults } from "../types";

const CertificationSection: React.FC<
  {
    certifications: CertificationBlockProps[];
  } & SectionDefaults
> = (props) => {
  return (
    <Container id={props.identifier}>
      <Fade bottom delay={50} duration={500}>
        <SectionHeader title={"Certifications"}></SectionHeader>
        {props.certifications.map((edu) => (
          <CertificationBlock {...edu} key={edu.title} />
        ))}
      </Fade>
    </Container>
  );
};

export default CertificationSection;
