import React from "react";
import Section from "../utilities/Section";
import Container from "../utilities/Container";

const AboutBanner = () => {
  return (
    <Section>
      <Container>
        <div className="flex w-full mb-20 flex-wrap">
          <div className="font-extrabold tracking-wide lg:w-1/3 lg:mb-0 mb-4">
            <h2 className="text-sm md:text-lg mb-1 uppercase">About</h2>
            <h3 className="text-primary-100 text-opacity-60 text-3xl md:text-5xl">
              Dr. Shashi Tharoor
            </h3>
          </div>
          <p className="text-lg lg:pl-6 lg:w-2/3 mx-auto leading-relaxed tracking-wide md:tracking-wider">
            An author, politician, and former international civil servant,
            Shashi Tharoor straddles several worlds of experience. Currently a
            third-term Lok Sabha MP representing the Thiruvananthapuram
            constituency and Chairman of the Parliamentary Standing Committee on
            Information Technology, he has previously served as Minister of
            State for Human Resource Development and Minister of State for
            External Affairs in the Government of India. During his nearly
            three-decade long prior career at the United Nations, he served as a
            peacekeeper, refugee worker, and administrator at the highest
            levels, serving as Under-Secretary General during Kofi Annan's
            leadership of the organisation.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default AboutBanner;
