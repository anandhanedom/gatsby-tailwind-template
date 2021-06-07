import React from "react";
import Container from "../components/utils/Container";
import Section from "./utils/Section";

const WhoWeAre = () => {
  return (
    <Section className="text-alpha bg-white">
      <Container>
        <h2 className="max-w-xl text-4xl sm:text-5xl">
          We’re a team of humans with the strategy, tools, and talent to provide
          the simplest solution for the most complex problem.
        </h2>
        <div></div>
      </Container>
    </Section>
  );
};

export default WhoWeAre;
