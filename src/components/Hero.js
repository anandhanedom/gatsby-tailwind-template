import React from "react";
import backgroundImage from "../assets/img/alb_2081918001.jpg";
import Container from "../utilities/Container";

const Hero = () => {
  return (
    <section className="relative bg-black">
      <img
        src={backgroundImage}
        height="100%"
        width="100%"
        style={{ opacity: "0.6" }}
      />
      <div class="absolute top-2/4 bottom-2/4">
        <Container className="sm:text-6xl font-bold text-white">
          <span style={{ color: "#FF9933" }}>India</span> matters to me,
          <br /> and I would like to matter to{" "}
          <span style={{ color: "#138808" }}>India</span>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
