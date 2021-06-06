import React from "react";
import Navbar from "./Navbar";
import Container from "../components/utils/Container";

const Hero = () => {
  return (
    <div className="h-screen bg-primary flex flex-col">
      <Navbar />
      <Container className="flex items-center flex-grow">
        <h1 className="text-4xl lg:text-6xl text-white leading-tight">
          Create <span className="text-secondary animate-pulse">lightning</span>
          <br />
          fast software
        </h1>
      </Container>
    </div>
  );
};

export default Hero;
