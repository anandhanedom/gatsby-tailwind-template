import React from "react";
import Container from "../utilities/Container";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="relative bg-black">
      <StaticImage
        src="../assets/img/alb_2081918001.jpg"
        style={{ opacity: "0.6", width: "100%" }}
        imgStyle={{ width: "100%" }}
      />
      <div class="absolute top-2/4">
        <Container className="text-base sm:text-xl md:text-4xl lg:text-6xl text-white font-semibold tracking-wide">
          <span className="text-ind-saffron">India</span> matters to me,
          <br /> and I would like to matter to{" "}
          <span className="text-ind-green">India</span>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
